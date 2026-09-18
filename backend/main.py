"""
ORCA Marine Intelligence — Backend
===================================
A small FastAPI service whose only job is to fetch REAL ocean/weather data
server-side and hand it to the frontend as clean JSON.

Why this exists (read this before changing anything):
- The frontend alone can reach Open-Meteo directly (that API allows
  cross-origin browser requests / CORS), so wind + wave data already works
  with zero backend.
- It CANNOT reach INCOIS's official PFZ (Potential Fishing Zone) system or
  most satellite data providers directly, because those services don't send
  CORS headers — browsers block that, servers don't. So the one thing a
  backend genuinely buys us here is the ability to fetch real satellite
  Sea-Surface-Temperature (SST) and Chlorophyll-a data from NOAA CoastWatch's
  ERDDAP service, which is the same scientific basis (SST fronts +
  chlorophyll concentration) that INCOIS's real PFZ advisories are built on.
- INCOIS's own PFZ system is not a documented public API (no key, no stable
  endpoint) — see NOTE_ON_INCOIS below if you want to attempt integrating it
  directly later.

Design goal: NEVER be a single point of failure. If this server is not
running, or any individual external call fails, the frontend already has
its own fallback chain (Open-Meteo direct-from-browser, then fully
simulated data) — see enhanceZonesWithRealData() / generateZones() in
app.js. This backend is a nice-to-have upgrade in accuracy, not a
requirement to run the app.

Also serves the "nearby fishermen" presence feature (Settings -> Share My
Location on the frontend): a small SQLite table (orca_data.db, created
automatically) of who has opted in and where they last checked in. This is
the one part of ORCA that is genuinely multi-user — but only between
devices that reach THIS SAME running server. Two browser tabs on one
laptop's own localhost will see each other; two different fishermen's own
phones will only see each other if this backend is actually running
somewhere both of their devices can reach (not each on their own
localhost), with BACKEND_URL in app.js pointed at that shared address.

Run it:
    pip install -r requirements.txt
    uvicorn main:app --reload --port 8000
(or just double-click start_backend.bat / run start_backend.sh)

Then open index.html (e.g. via VS Code "Live Server") as usual — the
frontend will automatically detect this backend at http://localhost:8000
and use it for more accurate zone data. If it's not running, nothing
breaks; the app quietly uses its existing fallback (except nearby-fishermen
sharing, which has no meaningful fallback — it just shows an honest "can't
reach the server" hint instead of fabricating other people).

Also serves the "AI Multi-Agent Panel" on the Agent Activity page
(POST /api/agent-analysis): a genuine LLM (Groq, free tier) reviews the
SAME real zone numbers already shown to the fisherman and gives an
independent second opinion, speaking as a small panel of specialist
agents. This needs your own free Groq API key — copy backend/.env.example
to backend/.env and paste your key in (get one at
https://console.groq.com/keys, no credit card required). Without a key,
this one feature honestly reports itself as unavailable; nothing else in
the app is affected.
"""

import asyncio
import hashlib
import json
import math
import os
import random
import sqlite3
import time
from typing import Optional

import httpx
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="ORCA Marine Intelligence Backend", version="1.1")

# CORS: defaults to wide open, which is fine while this only runs locally.
# Once deployed publicly, set the ALLOWED_ORIGINS environment variable (in
# Render's dashboard, no code change needed) to a comma-separated list of
# your real frontend origin(s), e.g.
#   ALLOWED_ORIGINS=https://yourusername.github.io
# so random other sites can't call your backend from a browser.
_allowed_origins_env = os.environ.get("ALLOWED_ORIGINS", "").strip()
_allowed_origins = [o.strip() for o in _allowed_origins_env.split(",") if o.strip()] or ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=_allowed_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

HTTP_TIMEOUT = 6.0  # seconds — fail fast per external call rather than hang the request


# ============== .env loading (for the Groq API key — see .env.example) ==============
# No new dependency added just for this: a tiny manual parser instead of
# python-dotenv. Reads backend/.env if present and fills in any environment
# variables that aren't already set (a real environment variable always
# wins over the file). backend/.env is never meant to be shared/committed —
# see backend/.env.example for the placeholder you fill in with your own
# free key.
def _load_dotenv():
    env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env")
    if not os.path.exists(env_path):
        return
    try:
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                key, _, val = line.partition("=")
                key = key.strip()
                val = val.strip().strip('"').strip("'")
                if key and key not in os.environ:
                    os.environ[key] = val
    except Exception:
        pass  # a broken .env file should never crash the whole backend


_load_dotenv()

# GROQ_API_KEY is intentionally NEVER hardcoded here. Get a free key (no
# credit card required) at https://console.groq.com/keys, then either:
#   1. Copy backend/.env.example to backend/.env and paste your key in, or
#   2. Set a GROQ_API_KEY environment variable before starting the backend.
# If it's left unset, /api/agent-analysis returns
# {"ok": false, "reason": "not_configured"} instead of crashing — every
# other feature in this app (rule-based zone scoring, presence, etc.) works
# exactly the same either way.
GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "").strip()
# Model list changes on Groq's end over time (they retire old ones without
# much notice) — if this default ever 404s again with "model_not_found" in
# the terminal, run check_groq_models.py to see what your key currently has
# access to and update this default (or set GROQ_MODEL in backend/.env)
# to a real chat model from that list — skip the whisper-* (speech-to-text)
# and *-prompt-guard-* (safety-filter, not general chat) entries.
GROQ_MODEL = os.environ.get("GROQ_MODEL", "openai/gpt-oss-20b").strip()
GROQ_HTTP_TIMEOUT = 20.0  # seconds — LLM calls are slower than the plain data fetches above

# ============== Presence database ("nearby fishermen") ==============
# A small persistent SQLite store (no extra dependency — sqlite3 is in the
# Python standard library) for fishermen who've opted in, in Settings, to
# share their location. This is the ONE piece of ORCA that is genuinely
# multi-user: it only works between devices that talk to this SAME running
# backend. If you run this backend only on your own laptop at
# http://localhost:8000, only browser tabs on that same laptop will ever see
# each other here — for it to show real other fishermen on their own phones,
# this server needs to run somewhere all of those devices can reach (e.g. a
# small always-on server or VPS), with BACKEND_URL in app.js pointed at it.
DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "orca_data.db")
PRESENCE_MAX_AGE_MIN_DEFAULT = 15  # a fisherman who hasn't checked in for this long is treated as offline


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    try:
        conn.execute(
            """CREATE TABLE IF NOT EXISTS presence (
                phone TEXT PRIMARY KEY,
                name TEXT NOT NULL DEFAULT '',
                lat REAL NOT NULL,
                lon REAL NOT NULL,
                updated_at REAL NOT NULL
            )"""
        )
        conn.commit()
    finally:
        conn.close()


init_db()


class PresenceIn(BaseModel):
    phone: str = Field(..., min_length=3, max_length=32)
    name: str = Field("", max_length=80)
    lat: float = Field(..., ge=-90, le=90)
    lon: float = Field(..., ge=-180, le=180)


def zone_letter(i: int) -> str:
    """A, B, C, ... Z, AA, AB, ... — mirrors app.js's zoneLetter() so the zone
    count is no longer hardcoded to 5 (Part 1: configurable radius + count)."""
    s = ""
    n = i
    while True:
        s = chr(65 + (n % 26)) + s
        n = n // 26 - 1
        if n < 0:
            break
    return s

# ---------------------------------------------------------------------------
# NOTE_ON_INCOIS:
# INCOIS (incois.gov.in) publishes the *official* PFZ advisory through an
# internal GeoServer/WebGIS (https://incois.gov.in/geoportal/MFASPFZ/) and a
# text-advisory page (https://incois.gov.in/MarineFisheries/TextDataHome),
# neither of which is a documented, stable public API. If you want to try
# wiring it in directly:
#   1. Open https://incois.gov.in/MarineFisheries/TextDataHome in a browser,
#      pick a sector, and use DevTools > Network to find the underlying
#      XHR/fetch request the page makes to load the advisory text/points.
#   2. Replicate that request here with httpx (server-side, so CORS doesn't
#      apply) and parse the response.
#   3. Treat it as best-effort: wrap it in try/except like everything below,
#      and never let a failure here break the /api/zones response.
# This backend does not attempt that scrape by default because the exact
# endpoint/format can change without notice and hasn't been verified live.
# ---------------------------------------------------------------------------


# ============== Geo helpers (mirrors app.js so positions look familiar) ==============

def haversine_km(lat1, lon1, lat2, lon2):
    r = 6371.0
    d_lat = math.radians(lat2 - lat1)
    d_lon = math.radians(lon2 - lon1)
    a = (math.sin(d_lat / 2) ** 2
         + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(d_lon / 2) ** 2)
    return r * 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))


def destination_point(lat, lon, bearing_deg, dist_km):
    r = 6371.0
    brng = math.radians(bearing_deg)
    lat1 = math.radians(lat)
    lon1 = math.radians(lon)
    lat2 = math.asin(math.sin(lat1) * math.cos(dist_km / r) + math.cos(lat1) * math.sin(dist_km / r) * math.cos(brng))
    lon2 = lon1 + math.atan2(
        math.sin(brng) * math.sin(dist_km / r) * math.cos(lat1),
        math.cos(dist_km / r) - math.sin(lat1) * math.sin(lat2),
    )
    return math.degrees(lat2), math.degrees(lon2)


def seeded_rng(lat, lon, salt=0):
    """Deterministic per-location RNG so the same spot gives the same 5 zone
    positions every time (mirrors the seeding idea in app.js, doesn't need to
    match bit-for-bit)."""
    key = f"{lat:.3f},{lon:.3f},{salt}".encode()
    seed = int(hashlib.sha256(key).hexdigest(), 16) % (2**32)
    return random.Random(seed)


def seaward_bearing_range(lon: float):
    """Same real-coastline reasoning as app.js's seawardBearingRange (Part 5):
    India's east coast (Bay of Bengal) runs roughly north-south with open sea
    to the east; the west coast (Arabian Sea) has open sea to the west.
    Keeps candidate zones over plausible open water instead of a uniformly
    random 0-360 degree bearing that could occasionally point back toward
    land."""
    return (100.0, 70.0) if lon >= 78.0 else (260.0, 70.0)


def generate_zone_points(lat, lon, radius_km: float = 20.0, count: int = 5):
    """radius_km / count are fisherman-chosen (Settings/Dashboard inputs on the
    frontend) instead of the old fixed 20 km / 5-zone assumption. Zones are
    spread between a small inner margin and the requested radius, within a
    realistic seaward bearing cone rather than a full 360-degree random
    spread."""
    zones = []
    min_dist = max(0.5, radius_km * 0.15)
    span = max(radius_km - min_dist, 0.1)
    bear_center, bear_spread = seaward_bearing_range(lon)
    for i in range(count):
        rng = seeded_rng(lat, lon, i * 7919)
        angle = (bear_center + (rng.random() * 2 - 1) * bear_spread) % 360
        dist = min_dist + rng.random() * span
        z_lat, z_lon = destination_point(lat, lon, angle, dist)
        zones.append({
            "id": f"zone{i}",
            "letter": zone_letter(i),
            "lat": round(z_lat, 5),
            "lon": round(z_lon, 5),
            "distance": round(haversine_km(lat, lon, z_lat, z_lon), 1),
        })
    zones.sort(key=lambda z: z["distance"])
    return zones


def clamp(v, lo, hi):
    return max(lo, min(hi, v))


# ============== External data fetchers (each fails safely on its own) ==============

async def fetch_open_meteo_wind(client: httpx.AsyncClient, lat, lon) -> Optional[dict]:
    """Returns {"speed": km/h, "dir": degrees the wind blows FROM} or None.
    Direction was added in Part 2 to drive the frontend's animated wind-flow
    overlay — same Open-Meteo call, one extra field."""
    try:
        r = await client.get(
            "https://api.open-meteo.com/v1/forecast",
            params={"latitude": f"{lat:.4f}", "longitude": f"{lon:.4f}",
                    "current": "wind_speed_10m,wind_direction_10m", "timezone": "auto"},
        )
        r.raise_for_status()
        cur = r.json()["current"]
        out = {"speed": float(cur["wind_speed_10m"])}
        if cur.get("wind_direction_10m") is not None:
            out["dir"] = float(cur["wind_direction_10m"])
        return out
    except Exception:
        return None


async def fetch_open_meteo_marine(client: httpx.AsyncClient, lat, lon) -> Optional[float]:
    try:
        r = await client.get(
            "https://marine-api.open-meteo.com/v1/marine",
            params={"latitude": f"{lat:.4f}", "longitude": f"{lon:.4f}",
                    "current": "wave_height", "timezone": "auto"},
        )
        r.raise_for_status()
        data = r.json()
        val = data.get("current", {}).get("wave_height")
        return float(val) if val is not None else None
    except Exception:
        return None


def _parse_erddap_json(data, varname):
    """ERDDAP .json griddap responses look like:
       {"table": {"columnNames": [...], "rows": [[...]]}}"""
    try:
        table = data["table"]
        cols = table["columnNames"]
        rows = table["rows"]
        if not rows:
            return None
        idx = cols.index(varname)
        val = rows[0][idx]
        return float(val) if val is not None else None
    except Exception:
        return None


async def fetch_satellite_sst(client: httpx.AsyncClient, lat, lon) -> Optional[float]:
    """Real satellite Sea-Surface Temperature from NASA/JPL MUR SST via NOAA
    CoastWatch ERDDAP (global, daily, ~1km). Returns degrees Celsius."""
    try:
        url = (
            "https://coastwatch.pfeg.noaa.gov/erddap/griddap/jplMURSST41.json"
            f"?analysed_sst[(last)][({lat:.4f})][({lon:.4f})]"
        )
        r = await client.get(url)
        r.raise_for_status()
        kelvin = _parse_erddap_json(r.json(), "analysed_sst")
        if kelvin is None:
            return None
        return round(kelvin - 273.15, 2)
    except Exception:
        return None


async def fetch_satellite_chlorophyll(client: httpx.AsyncClient, lat, lon) -> Optional[float]:
    """Real satellite chlorophyll-a concentration (mg/m^3) via NOAA CoastWatch
    ERDDAP (VIIRS, global, daily). This is one of the two core inputs to
    PFZ-style fishing-suitability advisories."""
    try:
        url = (
            "https://coastwatch.noaa.gov/erddap/griddap/noaacwNPPVIIRSchlaDaily.json"
            f"?chlor_a[(last)][({lat:.4f})][({lon:.4f})]"
        )
        r = await client.get(url)
        r.raise_for_status()
        val = _parse_erddap_json(r.json(), "chlor_a")
        return round(val, 3) if val is not None else None
    except Exception:
        return None


# ============== Scoring (same spirit as app.js, now grounded in real inputs where available) ==============

def score_zone(wind_data, wave, sst, chl, sst_values_this_call):
    """Returns (fish, weatherKey, oceanKey, overall, color, sources) using
    whatever real values were fetched; falls back to a clearly-labeled
    mid-range estimate for anything unavailable, so the response never has
    missing fields. wind_data is {"speed":.., "dir":..} from
    fetch_open_meteo_wind, or None if that call failed."""
    sources = {}

    wind_dir = None
    if wind_data is None:
        wind = 18.0
        sources["wind"] = "estimate"
    else:
        wind = wind_data["speed"]
        wind_dir = wind_data.get("dir")
        sources["wind"] = "open-meteo"

    if wave is None:
        wave = 1.2
        sources["wave"] = "estimate"
    else:
        sources["wave"] = "open-meteo-marine"

    if sst is None:
        sst = 28.0
        sources["sst"] = "estimate"
    else:
        sources["sst"] = "noaa-erddap-mursst"

    chl_available = chl is not None
    sources["chlorophyll"] = "noaa-erddap-viirs" if chl_available else "estimate"
    chl_val = chl if chl_available else 0.3

    wind_risk = clamp((wind - 8) / 32 * 100, 0, 100)
    wave_risk = clamp((wave - 0.4) / 2.3 * 100, 0, 100)
    risk_index = wind_risk * 0.5 + wave_risk * 0.5
    weather_key = "good" if risk_index < 35 else ("changing" if risk_index < 65 else "highrisk")
    ocean_key = "low" if risk_index < 35 else ("medium" if risk_index < 65 else "high")

    # --- Fishing-suitability proxy, grounded in real satellite inputs when available ---
    # Chlorophyll: higher concentration of phytoplankton generally supports
    # more fish activity. mg/m^3 is heavily right-skewed, so score on a log
    # scale rather than linearly.
    chl_score = clamp((math.log10(max(chl_val, 0.01)) + 2) / 2.3 * 100, 0, 100)

    # SST-front proxy: real PFZ advisories favor zones sitting on a
    # temperature *gradient* (warm/cold water meeting), not just an absolute
    # temperature. We approximate "frontal-ness" from how far this zone's
    # SST deviates from the mean SST across this batch of nearby zones —
    # a genuine local anomaly is a reasonable proxy for a front, without
    # needing extra API calls per zone.
    if sst_values_this_call and len(sst_values_this_call) > 1:
        mean_sst = sum(sst_values_this_call) / len(sst_values_this_call)
        deviation = abs(sst - mean_sst)
        front_score = clamp(deviation / 1.2 * 100, 0, 100)
    else:
        front_score = 40  # neutral if we don't have a comparison batch

    fish = round(chl_score * 0.6 + front_score * 0.4) if chl_available else round(35 + (front_score * 0.4))
    fish = int(clamp(fish, 5, 98))

    geo_score = 85  # geofence handled client-side (border/treaty math already lives in app.js)
    overall = round(fish * 0.45 + (100 - risk_index) * 0.35 + geo_score * 0.20)

    color = "red"
    if overall >= 75 and ocean_key != "high":
        color = "green"
    elif overall >= 50:
        color = "yellow"

    return {
        "fish": fish,
        "wind": round(wind, 1),
        "windDir": round(wind_dir, 0) if wind_dir is not None else None,
        "wave": round(wave, 1),
        "sst": round(sst, 1),
        "chlorophyll": round(chl_val, 3) if chl_available else None,
        "weatherKey": weather_key,
        "oceanKey": ocean_key,
        "overall": int(overall),
        "color": color,
        "sources": sources,
        "chlorophyll_available": chl_available,
    }


# ============== LLM MULTI-AGENT PANEL (Groq) ==============
# A second, independent opinion layered on top of the rule-based scoring
# above. The frontend sends the SAME real numbers it is already showing the
# fisherman — this endpoint never re-derives or invents its own zone data —
# and asks a free Groq-hosted LLM to review them, speaking as a small panel
# of specialist agents (Weather, Ocean/Wave, Fishing Potential,
# Border/Safety, and a Chief Coordinator who gives the final call).
# Grounding the prompt in real numbers keeps this honest: the model is
# reviewing real data, not inventing its own from scratch. If GROQ_API_KEY
# isn't configured, or the call fails for any reason, this fails safely —
# see fetch_groq_analysis below — and the frontend shows an honest
# "unavailable" message rather than a fabricated AI opinion.

class ZoneInput(BaseModel):
    letter: str
    distance: float
    fish: int
    wind: float
    wave: float
    sst: Optional[float] = None
    weatherKey: str
    oceanKey: str
    overall: int
    color: str
    borderDistance: Optional[float] = None
    borderTier: Optional[str] = None


class AgentAnalysisIn(BaseModel):
    lat: float = Field(..., ge=-90, le=90)
    lon: float = Field(..., ge=-180, le=180)
    recommended_letter: str
    zones: list[ZoneInput] = Field(..., min_length=1, max_length=30)


AGENT_PANEL_SYSTEM_PROMPT = (
    "You are a panel of marine-safety specialist agents helping an Indian "
    "coastal fisherman pick a fishing zone. You will be given REAL "
    "measured/estimated data for each candidate zone (wind speed, wave "
    "height, sea-surface temperature, a 0-100 fishing-potential score, an "
    "overall 0-100 safety/suitability score, and distance in km to the "
    "nearest international maritime border, where available). Never invent "
    "numbers beyond what is given to you. Respond as exactly these five "
    "agents, each with one or two short plain-English sentences a "
    "fisherman with no technical background can understand: "
    "\"Weather & Wind Agent\", \"Wave & Ocean Agent\", \"Fishing Potential "
    "Agent\", \"Border & Safety Agent\", and \"Chief Coordinator\" (the "
    "Chief Coordinator gives the final recommendation, confirming or "
    "disagreeing with the rule-based pick it is told about, and says why). "
    "Reply with ONLY valid JSON, no markdown fences, in exactly this shape: "
    "{\"agents\":[{\"name\":\"...\",\"finding\":\"...\"}, ...],"
    "\"summary\":\"one short paragraph, the Chief Coordinator's final "
    "recommendation\"}"
)


def _zone_line(z: "ZoneInput") -> str:
    border = f", border {z.borderDistance} km ({z.borderTier})" if z.borderDistance is not None else ""
    sst = f", sea temp {z.sst}°C" if z.sst is not None else ""
    return (f"Zone {z.letter}: {z.distance} km away, fishing potential "
            f"{z.fish}/100, wind {z.wind} km/h, wave {z.wave} m{sst}, "
            f"weather condition '{z.weatherKey}', ocean risk '{z.oceanKey}', "
            f"overall score {z.overall}/100{border}")


async def fetch_groq_analysis(client: httpx.AsyncClient, body: "AgentAnalysisIn"):
    """Returns (parsed_json_dict, None) on success, or (None, reason) on any
    failure — reason is one of "not_configured", "unavailable",
    "invalid_response". Never raises."""
    if not GROQ_API_KEY:
        return None, "not_configured"
    zones_text = "\n".join(_zone_line(z) for z in body.zones)
    user_prompt = (
        f"Zone data near ({body.lat:.4f}, {body.lon:.4f}):\n{zones_text}\n\n"
        f"The rule-based scoring system already picked Zone "
        f"{body.recommended_letter} as the recommendation. Review it and "
        f"either confirm it or flag any concern, as the Chief Coordinator."
    )
    # NOTE ON LOGGING: none of these print() calls ever include GROQ_API_KEY
    # itself — only the HTTP status/response body Groq sends back, which is
    # what you need to see in this terminal window to diagnose a failure
    # (invalid key, decommissioned model, rate limit, etc.) without your key
    # ever appearing on screen.
    try:
        r = await client.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": GROQ_MODEL,
                "messages": [
                    {"role": "system", "content": AGENT_PANEL_SYSTEM_PROMPT},
                    {"role": "user", "content": user_prompt},
                ],
                "temperature": 0.3,
                "max_tokens": 700,
                "response_format": {"type": "json_object"},
            },
        )
    except httpx.TimeoutException as e:
        print(f"[agent-analysis] TIMEOUT calling Groq (model={GROQ_MODEL}): {e}")
        return None, "unavailable"
    except httpx.RequestError as e:
        print(f"[agent-analysis] NETWORK ERROR calling Groq (model={GROQ_MODEL}): "
              f"{type(e).__name__}: {e}")
        return None, "unavailable"

    if r.status_code != 200:
        # This is the single most useful line for diagnosing a broken key or
        # a model Groq has since retired — Groq's error body normally says
        # exactly which of those it is.
        print(f"[agent-analysis] Groq returned HTTP {r.status_code} "
              f"(model={GROQ_MODEL}). Response body: {r.text[:800]}")
        return None, "unavailable"

    try:
        content = r.json()["choices"][0]["message"]["content"]
        parsed = json.loads(content)
    except Exception as e:
        print(f"[agent-analysis] Got HTTP 200 from Groq but couldn't parse the "
              f"response as the expected JSON shape: {type(e).__name__}: {e}. "
              f"Raw body: {r.text[:800]}")
        return None, "unavailable"

    if not isinstance(parsed, dict) or not isinstance(parsed.get("agents"), list):
        print(f"[agent-analysis] Groq's JSON didn't have the expected "
              f"{{'agents': [...]}} shape. Parsed: {parsed!r}")
        return None, "invalid_response"

    print(f"[agent-analysis] Groq call succeeded (model={GROQ_MODEL}).")
    return parsed, None


# ============== API ==============

@app.get("/api/health")
async def health():
    return {"status": "ok", "time": time.time()}


@app.get("/api/zones")
async def get_zones(
    lat: float = Query(..., ge=-90, le=90),
    lon: float = Query(..., ge=-180, le=180),
    radius_km: float = Query(20.0, ge=1, le=200, description="Fisherman-chosen search radius in km"),
    count: int = Query(5, ge=1, le=20, description="Fisherman-chosen number of candidate zones"),
):
    """Returns `count` candidate fishing zones within `radius_km` of (lat, lon)
    with real satellite SST + chlorophyll and real Open-Meteo wind/wave, where
    those calls succeed. radius_km/count are no longer hardcoded — the
    frontend passes whatever the fisherman set on the Dashboard (default:
    20 km / 5 zones). Border/geofence math is intentionally left to the
    frontend, which already has the real 1974/1976 treaty-based boundary
    logic."""
    points = generate_zone_points(lat, lon, radius_km, count)

    async with httpx.AsyncClient(timeout=HTTP_TIMEOUT) as client:
        tasks = []
        for z in points:
            tasks.append(asyncio.gather(
                fetch_open_meteo_wind(client, z["lat"], z["lon"]),
                fetch_open_meteo_marine(client, z["lat"], z["lon"]),
                fetch_satellite_sst(client, z["lat"], z["lon"]),
                fetch_satellite_chlorophyll(client, z["lat"], z["lon"]),
            ))
        results = await asyncio.gather(*tasks)

    sst_batch = [r[2] for r in results if r[2] is not None]

    zones = []
    for z, (wind_data, wave, sst, chl) in zip(points, results):
        scored = score_zone(wind_data, wave, sst, chl, sst_batch)
        zones.append({**z, **scored})

    return {
        "zones": zones,
        "generated_at": time.time(),
        "note": "wind/wave from Open-Meteo; SST/chlorophyll from NOAA CoastWatch ERDDAP "
                "(satellite). Any field marked 'estimate' in sources means that particular "
                "external call failed for this request — the rest of the response is still real.",
    }


# ============== Presence API ("nearby fishermen") ==============

@app.post("/api/presence")
async def update_presence(p: PresenceIn):
    """Upsert this fisherman's current position. Called by the frontend on a
    timer while Settings → Share My Location is on. Also opportunistically
    prunes rows nobody has refreshed in a long while, so the table doesn't
    grow forever from people who closed the app without turning sharing off."""
    now = time.time()
    conn = get_db()
    try:
        conn.execute(
            "INSERT INTO presence (phone, name, lat, lon, updated_at) VALUES (?,?,?,?,?) "
            "ON CONFLICT(phone) DO UPDATE SET name=excluded.name, lat=excluded.lat, "
            "lon=excluded.lon, updated_at=excluded.updated_at",
            (p.phone, p.name, p.lat, p.lon, now),
        )
        conn.execute("DELETE FROM presence WHERE updated_at < ?", (now - 3600,))  # 1hr hard cutoff
        conn.commit()
        count = conn.execute("SELECT COUNT(*) AS c FROM presence").fetchone()["c"]
    finally:
        conn.close()
    return {"ok": True, "active_count": count}


@app.delete("/api/presence/{phone}")
async def stop_presence(phone: str):
    """Called when the fisherman turns Share My Location off — removes them
    from the nearby list immediately rather than waiting for the row to age
    out, so turning sharing off actually stops being visible right away."""
    conn = get_db()
    try:
        conn.execute("DELETE FROM presence WHERE phone = ?", (phone,))
        conn.commit()
    finally:
        conn.close()
    return {"ok": True}


@app.get("/api/presence/nearby")
async def nearby_presence(
    lat: float = Query(..., ge=-90, le=90),
    lon: float = Query(..., ge=-180, le=180),
    radius_km: float = Query(50.0, ge=1, le=500),
    exclude_phone: str = Query(""),
    max_age_min: float = Query(PRESENCE_MAX_AGE_MIN_DEFAULT, ge=1, le=120),
):
    """Other fishermen who have Share My Location on, checked in within
    max_age_min minutes, and are within radius_km of (lat, lon) — sorted
    nearest first. Returns their name and phone (so the frontend can offer a
    real tel: call link) because seeing this list at all already required
    that fisherman to explicitly opt in, in their own Settings."""
    cutoff = time.time() - max_age_min * 60
    conn = get_db()
    try:
        rows = conn.execute(
            "SELECT phone, name, lat, lon, updated_at FROM presence WHERE updated_at >= ?",
            (cutoff,),
        ).fetchall()
    finally:
        conn.close()
    now = time.time()
    out = []
    for r in rows:
        if exclude_phone and r["phone"] == exclude_phone:
            continue
        d = haversine_km(lat, lon, r["lat"], r["lon"])
        if d > radius_km:
            continue
        out.append({
            "phone": r["phone"],
            "name": r["name"] or "Fisherman",
            "lat": r["lat"],
            "lon": r["lon"],
            "distance_km": round(d, 1),
            "last_seen_min": round((now - r["updated_at"]) / 60, 1),
        })
    out.sort(key=lambda x: x["distance_km"])
    return {"fishermen": out}


@app.post("/api/agent-analysis")
async def agent_analysis(body: AgentAnalysisIn):
    """Independent LLM 'second opinion' panel — see fetch_groq_analysis
    above for the full explanation. Requires a free Groq API key configured
    in backend/.env (copy backend/.env.example and fill it in — see
    https://console.groq.com/keys). Returns {"ok": false, "reason":
    "not_configured"} rather than an HTTP error if no key is set yet, so
    the frontend can show an honest message instead of treating this like
    a crash."""
    async with httpx.AsyncClient(timeout=GROQ_HTTP_TIMEOUT) as client:
        parsed, reason = await fetch_groq_analysis(client, body)
    if parsed is None:
        return {"ok": False, "reason": reason}
    return {
        "ok": True,
        "agents": parsed.get("agents", []),
        "summary": parsed.get("summary", ""),
        "model": GROQ_MODEL,
    }


@app.get("/")
async def root():
    return {
        "service": "ORCA Marine Intelligence backend",
        "endpoints": [
            "/api/health",
            "/api/zones?lat=..&lon=..&radius_km=..&count=..",
            "/api/presence [POST]",
            "/api/presence/{phone} [DELETE]",
            "/api/presence/nearby?lat=..&lon=..&radius_km=..&exclude_phone=..",
            "/api/agent-analysis [POST] (needs GROQ_API_KEY — see backend/.env.example)",
        ],
        "note": "Open index.html separately (e.g. VS Code Live Server) — this backend only serves JSON.",
    }
