@echo off
echo ========================================
echo Starting MongoDB Service
echo ========================================
echo.

net start MongoDB

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ MongoDB Started Successfully!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. cd Backend
    echo 2. npm run import
    echo.
) else (
    echo.
    echo ========================================
    echo ❌ Failed to start MongoDB service
    echo ========================================
    echo.
    echo Try these solutions:
    echo 1. Run this file as Administrator
    echo 2. Open Services (services.msc) and start MongoDB manually
    echo 3. See Backend\MONGODB-START-GUIDE.md for detailed help
    echo.
)

pause
