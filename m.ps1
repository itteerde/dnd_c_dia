
$StopWatch = [System.Diagnostics.Stopwatch]::StartNew();

node .\dia.js
Write-Host ("time preparing LaTeX "+$StopWatch.Elapsed.ToString());

Start-Process -FilePath "xelatex.exe" -WorkingDirectory "./latex" -NoNewWindow -ArgumentList "--interaction=batchmode --halt-on-error dia" -Wait

$StopWatch.Stop();


Write-Host ("time total "+$StopWatch.Elapsed.ToString());