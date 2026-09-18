#!/usr/bin/env bash
# ORCA backend launcher (macOS/Linux)
# Creates a virtual environment on first run, installs dependencies, then
# starts the API on http://localhost:8000
set -e
cd "$(dirname "$0")"

if [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv .venv
fi

source .venv/bin/activate

echo "Installing/checking dependencies..."
pip install --quiet --upgrade pip
pip install --quiet -r requirements.txt

echo ""
echo "Starting ORCA backend on http://localhost:8000"
echo "Leave this terminal open. Open index.html separately (e.g. VS Code Live Server)."
echo "Press CTRL+C to stop."
echo ""
uvicorn main:app --reload --port 8000
