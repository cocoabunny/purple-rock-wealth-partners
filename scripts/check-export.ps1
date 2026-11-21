
# Purple Rock Wealth Partners
# Static Export Validation

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root "out"

if (-not (Test-Path $out)) {
    Write-Host "ERROR: out/ directory not found." -ForegroundColor Red
    Write-Host "Run npm.cmd run build first."
    exit 1
}

$routes = @(
    "index.html"
    "about/index.html"
    "services/index.html"
    "services/business-valuation/index.html"
    "services/funding-capital/index.html"
    "services/growth-strategy/index.html"
    "services/licensing-solutions/index.html"
    "services/mergers-acquisitions/index.html"
    "services/strategic-partnerships/index.html"
    "services/succession-planning/index.html"
    "services/technology-integration/index.html"
    "our-approach/index.html"
    "insights/index.html"
    "insights/financial-advice-business-succession-planning/index.html"
    "insights/financial-advice-business-growth-strategy/index.html"
    "contact/index.html"
    "privacy-policy/index.html"
    "sitemap.xml"
    "robots.txt"
)

$passed = 0
$failed = 0

Write-Host ""
Write-Host "PURPLE ROCK — STATIC EXPORT AUDIT" -ForegroundColor Cyan
Write-Host "--------------------------------"

foreach ($route in $routes) {
    $relativePath = $route.Replace("/", [IO.Path]::DirectorySeparatorChar)
    $fullPath = Join-Path $out $relativePath

    if (Test-Path $fullPath) {
        Write-Host "[PASS] $route" -ForegroundColor Green
        $passed++
    }
    else {
        Write-Host "[FAIL] $route" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "Results: $passed passed, $failed failed"

if ($failed -gt 0) {
    Write-Host "Export validation FAILED." -ForegroundColor Red
    exit 1
}

Write-Host "Export validation PASSED." -ForegroundColor Green
exit 0
