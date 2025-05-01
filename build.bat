@echo off
echo Building optimized production build...

:: Set environment variables for better performance
set "GENERATE_SOURCEMAP=false"
set "CI=false"

:: Clean existing build folder if exists
if exist "build" (
  echo Cleaning previous build...
  rmdir /s /q "build"
)

:: Run build command
call npm run build:win

echo Build completed successfully!
echo You can now deploy the contents of the build folder. 