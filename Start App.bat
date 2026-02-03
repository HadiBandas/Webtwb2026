@echo off
echo Starting Taman Wisata Bougenville Server...
cd /d "%~dp0"
start "TWB Server" npm run dev
timeout /t 5 >nul
start http://localhost:3000/
pause
