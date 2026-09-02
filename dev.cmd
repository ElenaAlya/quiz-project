@echo off
cd /d "%~dp0"
"C:\Users\aksen\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "%~dp0node_modules\next\dist\bin\next" dev -H 127.0.0.1 -p 3000
