@echo off
REM ORCA backend launcher (Windows)
REM Creates a virtual environment on first run, installs dependencies, then
REM starts the API on http://localhost:8000
cd /d "%~dp0"

if not exist ".venv" (
    echo Creating virtual environment...
    python -m venv .venv
)

call .venv\Scripts\activate.bat

echo Installing/checking dependencies...
python -m pip install --quiet --upgrade pip
python -m pip install --quiet -r requirements.txt

echo.
echo Starting ORCA backend on http://localhost:8000
echo Leave this window open. Open index.html separately (e.g. VS Code Live Server).
echo Press CTRL+C to stop.
echo.
uvicorn main:app --reload --port 8000
pause
