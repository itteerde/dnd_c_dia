
$StopWatch = [System.Diagnostics.Stopwatch]::StartNew();
$stepCounter = 1;

Write-Host -ForegroundColor DarkGray ("`nStep "+$stepCounter+": preparing LaTeX.");
$process = Start-Process -FilePath "node.exe" -WorkingDirectory "." -NoNewWindow -ArgumentList "./src/dia.mjs" -PassThru
Wait-Process -InputObject $process

if ($process.ExitCode -ne 0) {
    Write-Warning "$_ exited with status code $($process.ExitCode)";
    return $process.ExitCode;
}
Write-Host -ForegroundColor DarkGray ("time preparing LaTeX "+$StopWatch.Elapsed.ToString());
$stepCounter++;

Write-Host -ForegroundColor DarkGray ("`nStep "+$stepCounter+": running LaTeX.");
$process = Start-Process -FilePath "xelatex.exe" -WorkingDirectory "./latex" -NoNewWindow -ArgumentList "--interaction=batchmode --halt-on-error dia" -PassThru
Wait-Process -InputObject $process
if ($process.ExitCode -ne 0) {
    Write-Warning "$_ exited with status code $($process.ExitCode)";
    return $process.ExitCode;
}


$StopWatch.Stop();


Write-Host -ForegroundColor Green ("`nSuccess, time total "+$StopWatch.Elapsed.ToString());