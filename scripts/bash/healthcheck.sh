#!/bin/bash
# DeFi Yield Optimizer - Health Check Script
set -euo pipefail

URL="${1:-http://localhost:3000}"

echo "Checking health of $URL..."

response=$(curl -s -o /dev/null -w "%{http_code}" "$URL/api/health" 2>/dev/null || echo "000")

if [ "$response" = "200" ]; then
    echo "✅ Service is healthy"
    exit 0
else
    echo "❌ Service is unhealthy (HTTP $response)"
    exit 1
fi
