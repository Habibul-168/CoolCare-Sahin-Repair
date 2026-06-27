@echo off
echo ========================================
echo   Technician Portfolio - Dev Server
echo ========================================
echo.

echo [1/2] Starting Backend Server...
start cmd /k "cd backend && npm run dev"

timeout /t 3 /nobreak > nul

echo [2/2] Starting Frontend Server...
start cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo   Servers Starting...
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo Admin:    http://localhost:5173/admin/login
echo.
echo Press any key to close this window...
pause > nul
