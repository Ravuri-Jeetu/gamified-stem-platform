@echo off
echo Installing client-side dependencies...
cd "c:\Users\ravur\EduQuest"
for /f "delims=" %%i in (client_dependencies.txt) do (
  call %%i
)
echo Client-side dependencies installed.

echo Installing server-side dependencies...
cd "c:\Users\ravur\EduQuest\server"
for /f "delims=" %%i in (..\server_dependencies.txt) do (
  call %%i
)
echo Server-side dependencies installed.

echo All dependencies installed.
pause