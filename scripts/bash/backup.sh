#!/bin/bash
# DeFi Yield Optimizer - Backup Script
set -euo pipefail

BACKUP_DIR="${BACKUP_DIR:-./backups}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"

echo "Creating backup..."
tar -czf "$BACKUP_FILE" \
    --exclude=node_modules \
    --exclude=.next \
    --exclude=.git \
    -C "$(dirname "$0")/.." .

echo "Backup created: $BACKUP_FILE"
echo "Size: $(du -h "$BACKUP_FILE" | cut -f1)"
