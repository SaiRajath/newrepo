@echo off
echo Starting the portfolio application in development mode...
set NODE_ENV=development
npx tsx server/index.ts
if errorlevel 1 (
  echo.
  echo Error starting the application. 
  echo If you see "ENOTSUP" errors, try running with an older version of Node.js (e.g., v18 or v16).
  echo.
  pause
)