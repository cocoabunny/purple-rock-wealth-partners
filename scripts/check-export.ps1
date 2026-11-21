
# Purple Rock Wealth Partners
# Static Export Validation Script

$ErrorActionPreference = "Stop"

# Find the project root directory.
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$OutputDirectory = Join-Path $ProjectRoot "out"

Write-Host ""
Write-Host "PURPLE ROCK - STATIC EXPORT AUDIT" -ForegroundColor Cyan
Write-Host "--------------------------------"

# Check that the export folder exists.
if (-not (Test-Path $OutputDirectory)) {
    Write-Host "ERROR: The out directory was not found." -ForegroundColor Red
    Write-Host "Run npm.cmd run build before running this script."
    exit 1
}

# Expected exported website files.
$Routes = @(
    "index.html",
    "about/index.html",
    "services/index.html",
    "services/business-valuation/index.html",
    "services/funding-capital/index.html",
    "services/growth-strategy/index.html",
    "services/licensing-solutions/index.html",
    "services/mergers-acquisitions/index.html",
    "services/strategic-partnerships/index.html",
    "services/succession-planning/index.html",
    "services/technology-integration/index.html",
    "our-approach/index.html",
    "insights/index.html",
    "insights/financial-advice-business-succession-planning/index.html",
    "insights/financial-advice-business-growth-strategy/index.html",
    "contact/index.html",
    "privacy-policy/index.html",
    "sitemap.xml",
    "robots.txt"
)

$Passed = 0
$Failed = 0

# Check each expected file.
foreach ($Route in $Routes) {
    $RelativePath = $Route.Replace(
        "/",
        [System.IO.Path]::DirectorySeparatorChar
    )

    $FullPath = Join-Path $OutputDirectory $RelativePath

    if (Test-Path -LiteralPath $FullPath -PathType Leaf) {
        Write-Host "[PASS] $Route" -ForegroundColor Green
        $Passed++
    }
    else {
        Write-Host "[FAIL] $Route" -ForegroundColor Red
        $Failed++
    }
}

Write-Host ""
Write-Host "--------------------------------"
Write-Host "Passed: $Passed"
Write-Host "Failed: $Failed"
Write-Host "--------------------------------"

if ($Failed -gt 0) {
    Write-Host "Export validation FAILED." -ForegroundColor Red
    exit 1
}

Write-Host "Export validation PASSED." -ForegroundColor Green
exit 0
