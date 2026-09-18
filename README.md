# ORCA Marine Intelligence — Project Guide

## Folder structure (one language per file, as requested)

```
ORCA_Marine_Intelligence/
├── index.html          ← HTML structure only
├── style.css            ← All styling
├── app.js                ← All frontend logic (JavaScript)
└── backend/
    ├── main.py            ← Python (FastAPI) — fetches real satellite/weather data
    ├── requirements.txt   ← Python dependencies
    ├── .env.example       ← Copy to .env and add your own free Groq API key (AI panel)
    ├── start_backend.bat  ← One-click launcher (Windows)
    └── start_backend.sh   ← One-click launcher (macOS/Linux)
```

## How to run it

**Frontend only (works immediately, no setup):**
Open `index.html` with VS Code's "Live Server" extension (or any static file
server). That's it — the app works fully without the backend, using
Open-Meteo directly from the browser for weather/waves.

**Frontend + backend (best accuracy — real satellite fish-suitability data):**
1. Double-click `backend/start_backend.bat` (Windows) or run
   `backend/start_backend.sh` (macOS/Linux) in a terminal. First run creates
   a virtual environment and installs dependencies automatically.
2. Leave that terminal window open — it's running the API on
   `http://localhost:8000`.
3. Open `index.html` via Live Server as usual, in a **separate** window/tab.
4. Pick a location. The app automatically detects the backend and uses it —
   you don't need to configure anything.

You never have to run the backend. It's a pure upgrade in accuracy, not a
requirement — see "The three data tiers" below.

**Optional: the AI Multi-Agent Panel (free, needs one extra step).**
The Agent Activity page's "AI Multi-Agent Panel" is a genuine LLM
(Groq, free tier) reviewing the same real zone numbers and giving an
independent second opinion — it's separate from everything above and
needs its own free API key:
1. Get a free key (no credit card) at https://console.groq.com/keys
2. In the `backend/` folder, copy `.env.example` to a new file named
   `.env`, and paste your key in next to `GROQ_API_KEY=`.
3. Restart the backend (stop it and re-run `start_backend.bat`/`.sh`).

Without this step, the AI panel honestly shows "not available yet"
instead of pretending — every other feature (including the rule-based
zone recommendation it's reviewing) works exactly the same either way.

## The three data tiers

Every zone card shows a small badge telling you exactly which tier produced
its numbers:

| Badge | Where it comes from | When it's used |
|---|---|---|
| 🟡 **SATELLITE** | Python backend → real satellite Sea-Surface-Temperature + Chlorophyll-a (NOAA CoastWatch ERDDAP) + real Open-Meteo wind/wave | Backend is running and reachable |
| 🟢 **LIVE** | Real Open-Meteo wind/wave/SST, fetched directly from the browser | Backend not running, but internet is available |
| ⚪ **SIM** | Deterministic simulated placeholder, seeded by location | Both of the above failed (e.g. fully offline) |

The app tries SATELLITE first, falls back to LIVE, falls back to SIM — it
never shows a blank screen or an error, it just quietly uses the best tier
it could reach. This is intentional: a fisherman's safety tool should degrade
gracefully, not crash.

## Why fish-suitability isn't a random number anymore

Fish-suitability used to be a random number seeded by location. It's now
computed (when the backend is reachable) from two **real** satellite
measurements:

- **Chlorophyll-a concentration** — more phytoplankton generally means more
  of the food chain that attracts fish.
- **Sea-Surface-Temperature anomaly** — zones sitting on a temperature
  *front* (a local deviation from surrounding water) are a classic proxy for
  fish aggregation.

This mirrors the actual scientific basis of INCOIS's official Potential
Fishing Zone (PFZ) advisories (also SST + chlorophyll). It is **not** the
literal official INCOIS PFZ zones — those aren't available as a public,
documented API (see `backend/main.py`'s `NOTE_ON_INCOIS` comment for what
would be involved in attempting that integration directly, and why it isn't
done by default).

## Honesty about limitations

- **State boundaries** (Tamil Nadu↔Andhra Pradesh etc.) are a rough
  coastal-latitude approximation, not a surveyed line.
- **The India–Sri Lanka maritime line** uses the real coordinate points from
  the 1974/1976 boundary agreements — meaningfully more accurate, but still
  labeled "approximate" since it's a straight-line rendering of treaty
  points, not an official chart.
- **Fish-suitability**, even in SATELLITE tier, is a defensible proxy model —
  not the literal official PFZ advisory.
- The backend's CORS policy (`allow_origins=["*"]`) is intentionally open for
  local single-user development. If you ever deploy this publicly, lock that
  down to your actual frontend origin.

Always tell people using this for real fishing/safety decisions to verify
with official sources (INCOIS, IMD, Coast Guard) before acting on it.

## Changelog — Part 1 of 5 (upgrade plan)

The full upgrade wishlist (wind overlay, Cyclone Intelligence, trip planner,
real PFZ-style candidate locations, a production PostGIS/cloud rebuild) is
being done in 5 parts, one at a time. Part 1 is done:

- **Configurable search radius + zone count.** The old hardcoded 20 km
  search circle and fixed 5 zones are gone. The Dashboard now has a
  "Search radius (km)" and "Number of zones" input (default 20 km / 5,
  same as before) — the fisherman picks both. Both the simulated tier and
  the backend (`/api/zones?...&radius_km=&count=`) honor it. Zone letters
  are generated dynamically (A, B, C, ... Z, AA, ...) instead of a fixed
  5-letter list, so any zone count works.
- **Border risk rings now show on the main Dashboard map**, not only on the
  separate Border Intelligence page — fishing zones and the same
  yellow/orange/red border-distance rings appear together on one map, plus
  a one-line border-status echo next to it.
- **"Talk to ORCA" chat is now also on the Dashboard**, next to the unified
  map, so a fisherman can ask questions ("how far am I from the border?",
  "which zone is safer?") without switching pages. It's the same
  conversation/answers as the Border page's chat, just available in both
  places.
- The Border Intelligence page itself is unchanged — it still has the
  detailed live-tracking toggle, demo-simulate-approach, and family alert
  log, since those are more involved controls than belong on the
  Dashboard.

Part 2 is done: an animated wind-flow overlay on the Dashboard map. It's a
lightweight canvas animation, not a real meteorological wind-field model —
particles follow the same per-zone wind speed/direction already shown on
each zone card (now including real wind *direction* from Open-Meteo, not
just speed), using simple nearest-zone interpolation. Toggle with the new
"Show animated wind flow" checkbox.

Part 3 is done: a new "Cyclone Intel" tab with two clearly separate parts —
(1) a storm-risk heuristic built from real live wind + pressure + wave data
(same Open-Meteo source as the rest of the app), which is a simple
threshold score, explicitly labeled as NOT real cyclone detection; and
(2) a fully simulated demo storm system (name, category, distance, forward
speed, ETA) that changes daily and has a "Regenerate Demo Scenario" button,
also explicitly labeled SIMULATED and never presented as a real IMD-tracked
cyclone. Real live cyclone tracking (IMD/MOSDAC) needs credentialed
government data feeds this session doesn't have — see the on-page and
Data Sources disclaimers.

Part 4 is done: three related additions.

- **Trip Planner** (new tab): pick a departure date/time and trip duration
  and it fetches Open-Meteo's real hourly wind + wave forecast for your
  selected location, slices it to your departure→return window, and shows
  a go/caution/no-go advisory based on the WORST hour in that window (not
  the average — a trip is only as safe as its worst moment). Beyond the
  ~15-day forecast horizon, or if the fetch fails, it clearly falls back to
  a labeled simulated estimate instead of guessing.
- **Data-freshness labeling**: every zone card's SATELLITE/LIVE/SIM badge
  now also carries a CACHED state — if a fetch is more than 10 minutes old
  (the fisherman left the tab open without re-searching) it's relabeled
  CACHED instead of silently still claiming LIVE, and re-checks itself
  automatically every minute. Cards also show an "as of HH:MM:SS" fetch
  time. The Cyclone Intel heuristic and the Trip Planner's forecast both
  show the same kind of tag (LIVE/FORECAST/CACHED/SIMULATED).
- **Safety overrides fishing score**: every "best zone" pick in the app
  (ORCA ANALYZE, Compare, chat answers, Suggest Return Route) now runs
  through a safety-first comparator — a safer weather/ocean color tier
  always wins over a riskier one, then a safer border tier, and only ties
  within the same safety tier are broken by the raw combined score. A zone
  can no longer out-rank a safer one purely by having a better catch
  number.

Part 5 is done: three related additions, closing out the 5-part plan.

- **Seaward candidate zones**: candidate zone bearings are no longer a
  uniform random 0–360°. They're now constrained to a realistic "seaward
  cone" based on which real Indian coast (Bay of Bengal or Arabian Sea) the
  selected point is on, using the same east/west coast split already used
  elsewhere in this app for state boundaries — so generated zones land over
  plausible open water instead of occasionally pointing back toward the
  coastline. Applied in both the frontend simulator and the backend.
- **Known fishing harbors** (new map layer + fact): a small curated list of
  real, publicly known major Indian fishing harbors is now shown as ⚓
  markers on the Dashboard map (toggle: "Show known fishing harbors"), plus
  a "Nearest known fishing harbor" line for the selected location. These
  are genuinely real, verifiable place names — clearly labeled as
  general-knowledge approximate positions, not survey-grade coordinates and
  not a live feed.
- **Data-source health panel** (Data Sources tab): a real, live
  reachability check — not a claim, an actual timed fetch — against the
  Python backend, Open-Meteo (weather), Open-Meteo (marine), and Nominatim
  (place search), plus browser GPS availability and network status. Runs
  automatically when you open Data Sources, with a "Check Now" button to
  re-run it any time.

Not in scope for this local-prototype pass (explicitly out of scope, would
need real infrastructure and access this session can't stand up): a
production PostGIS database, credentialed government API integrations
(IMD/MOSDAC/INCOIS), and cloud deployment. The literal official INCOIS PFZ
feed is still not scraped, for the reasons in backend/main.py's
NOTE_ON_INCOIS comment.

This closes out the planned 5-part upgrade (Part 1: configurable search
radius/zone count + unified border+fishing map + Dashboard chat; Part 2:
animated wind visualization; Part 3: Cyclone Intelligence demo module;
Part 4: trip planner + data-freshness labeling + safety-first
recommendations; Part 5: seaward zone geography + known harbors + data
health panel).

## Part 6 — Real LLM "AI Multi-Agent Panel" (Agent Activity page)

The Agent Activity page previously only showed a simulated, deterministic
step-by-step animation — no real AI was involved, and it always said the
same thing for the same numbers. It's now backed by an actual LLM call:

- Pressing **ORCA ANALYZE** still instantly shows the existing rule-based
  reasoning steps and recommendation (unchanged — this is real computed
  data, not AI, and stays instant).
- Below it, a new **AI Multi-Agent Panel** card asks a free, fast
  Groq-hosted LLM to independently review the exact same real numbers
  (wind, wave, sea temperature, fishing score, border distance) and reply
  as a small panel of specialist agents — Weather & Wind, Wave & Ocean,
  Fishing Potential, Border & Safety, and a Chief Coordinator that gives a
  final plain-English recommendation.
- The LLM is only ever shown the real numbers already computed elsewhere
  in the app — it's told never to invent its own data, so its opinion is
  grounded, not hallucinated.
- This needs a free Groq API key (see "Optional: the AI Multi-Agent Panel"
  above). Until one is configured, or if the backend/request fails for any
  reason, the panel honestly says so instead of faking a response or
  silently falling back to the old simulated animation without explanation.
- New backend endpoint: `POST /api/agent-analysis` (see `backend/main.py`).
