#!/bin/bash
# DeFi Yield Optimizer - Database Migration Script
set -euo pipefail

DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-5432}"
DB_NAME="${DB_NAME:-defi_optimizer}"
DB_USER="${DB_USER:-postgres}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "Running database migrations..."

for migration in "$PROJECT_ROOT"/sql/migrations/*.sql; do
    if [ -f "$migration" ]; then
        echo "Applying: $(basename "$migration")"
        PGPASSWORD="${DB_PASSWORD:-}" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -f "$migration"
    fi
done

echo "Migrations complete!"
