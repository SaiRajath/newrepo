@echo off
echo Starting the portfolio application with alternative settings...
set NODE_ENV=development

:: Use a simple HTTP server approach
set PORT=5000
echo.
echo This will start two servers:
echo 1. Backend server on port 5000
echo 2. Vite dev server on a different port

:: Start backend server
start cmd /k "npx tsx server/index.ts"

:: Start the Vite server
cd client
start cmd /k "npx vite --port 3000"

echo.
echo If successful, the application should be available at:
echo   Backend API: http://localhost:5000
echo   Frontend UI: http://localhost:3000
echo.
echo Press any key to close this window...
pause > nul