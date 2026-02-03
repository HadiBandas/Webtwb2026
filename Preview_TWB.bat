@echo off
echo Starting Taman Wisata Bougenville Preview...
cd /d "%~dp0"

:: Check for Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Node.js cannot be found.
    echo Preview requires Node.js to function.
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo or ensure it is in your PATH.
    echo.
    echo [ERROR] Node.js tidak ditemukan.
    echo Preview membutuhkan Node.js untuk berjalan.
    echo.
    echo Silakan instal Node.js dari: https://nodejs.org/
    echo atau pastikan sudah ada di PATH sistem Anda.
    echo.
    pause
    exit /b 1
)

:: Run the app
echo Node.js found. Starting preview...
call npm run dev -- --open
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to start the application.
    echo Please check the error message above.
    pause
)
pause
