"""
One-time diagnostic script — NOT part of the running app.

Lists the Groq models your API key can currently use, straight from Groq's
own API, so we pick a model name that actually still exists instead of
guessing. It reuses the exact same backend/.env loading as main.py, and it
never prints your API key anywhere — only the model list Groq sends back.

How to run it (from the backend/ folder, with the same virtual environment
the backend itself uses):

    Windows:
        cd path\\to\\ORCA_Marine_Intelligence\\backend
        .venv\\Scripts\\activate
        python check_groq_models.py

    macOS/Linux:
        cd path/to/ORCA_Marine_Intelligence/backend
        source .venv/bin/activate
        python3 check_groq_models.py

Then copy/screenshot the output back so the right model name can be set.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import main  # noqa: E402  (reuses main.py's .env loader + GROQ_API_KEY)

import httpx  # noqa: E402

if not main.GROQ_API_KEY:
    print("No GROQ_API_KEY found in backend/.env — nothing to check.")
    sys.exit(1)

try:
    r = httpx.get(
        "https://api.groq.com/openai/v1/models",
        headers={"Authorization": f"Bearer {main.GROQ_API_KEY}"},
        timeout=15.0,
    )
except Exception as e:
    print(f"Could not reach Groq: {type(e).__name__}: {e}")
    sys.exit(1)

print("HTTP status:", r.status_code)

if r.status_code == 200:
    data = r.json()
    ids = sorted(m.get("id", "?") for m in data.get("data", []))
    print(f"\n{len(ids)} model(s) available to your key:\n")
    for model_id in ids:
        print(" -", model_id)
    print(
        "\nPick one of the names above (a small/fast one, name usually "
        "containing '8b' or 'instant', is the quickest and cheapest) and "
        "report it back."
    )
else:
    print("Error body:", r.text[:800])
