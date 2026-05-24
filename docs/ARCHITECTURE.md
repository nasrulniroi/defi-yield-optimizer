# Architecture

## Overview
The Yield Optimizer uses a modular architecture with clear separation between frontend, backend processing, and blockchain scanning.

## Components
1. **Frontend (Next.js)**: Dashboard, vault management, analytics
2. **Python Backend**: APY calculation, strategy optimization, data feeds
3. **Go Scanner**: Real-time blockchain event monitoring
4. **PostgreSQL**: Persistent storage for vaults, harvests, strategies
