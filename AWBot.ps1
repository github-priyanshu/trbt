Expand-Archive -Path "C:\Users\Administrator\Downloads\Awesome Traffic Bot-bing.zip" -DestinationPath "C:\Program Files (x86)\DalgaDev\Awesome Traffic Bot" -Force
Write-Host "Replaced all file"
$exeFilePath = "C:\Users\Administrator\Downloads\ATB-UPDATE-64-1763.zip\ATB Installer.exe"
Start-Process -FilePath $exeFilePath -Wait
Write-Host "Installation complete."
taskkill /IM chrome.exe /F
rm C:\Users\Administrator\Downloads\AWBot.ps1

Start-Process -FilePath "C:\Program Files (x86)\DalgaDev\Awesome Traffic Bot\Awesome Traffic Bot.exe"
