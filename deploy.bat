@echo off
echo Starting deployment process for portfolio website...

:: Set environment variables for better performance
set "GENERATE_SOURCEMAP=false"
set "CI=false"

:: Clean existing build folder if exists
if exist "build" (
  echo Cleaning previous build...
  rmdir /s /q "build"
)

:: Run build command with optimizations
echo Building optimized production bundle...
call npm run build:win

:: Check if build was successful
if not exist "build" (
  echo Build failed! Aborting deployment.
  exit /b 1
)

echo Build completed successfully!
echo You can now deploy the contents of the build folder.

:: Reminder about deployment
echo.
echo DEPLOYMENT INSTRUCTIONS:
echo 1. Upload all files from the 'build' folder to your web server.
echo 2. Make sure your web server is configured to serve index.html for routes.
echo 3. For Netlify or Vercel, you can simply deploy the 'build' folder.
echo.

:: Ready for deployment
echo Files are ready for deployment in the 'build' folder. 