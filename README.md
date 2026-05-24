# DeFi Yield Optimizer

**🚀 [Live Demo](https://defi-yield-optimizer.vercel.app)**

Automated yield farming strategy engine monitoring 40+ protocols across 8 chains. Features auto-compounding vaults, IL calculator, APY comparison, reward harvesting, and risk-adjusted rebalancing.

## Overview

A comprehensive DeFi analytics platform built with Next.js 14, TypeScript, and Tailwind CSS. The platform provides real-time data visualization, intelligent monitoring, and actionable insights for decentralized finance participants.

### Key Highlights

- **Real-Time Data**: Live updates from multiple blockchain networks and protocols
- **Multi-Chain Support**: Ethereum, Polygon, Arbitrum, Optimism, BSC, Solana, Base
- **Advanced Analytics**: Historical charts, trend analysis, and predictive metrics
- **Alert System**: Configurable notifications for important events
- **Modern UI**: Dark theme with indigo accent (#818cf8), responsive design

## Architecture

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS | Server-rendered UI with App Router |
| Charts | Chart.js, react-chartjs-2 | Data visualization |
| State | Zustand, React Query | Client and server state |
| Backend | Python 3.11+, FastAPI | Data processing and APIs |
| Scanner | Go 1.21+ | Real-time blockchain scanning |
| Database | PostgreSQL | Persistent storage |
| Deploy | Vercel | Production hosting |

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ │
│  │Dashboard │ │Analytics │ │ Settings │ │  Alerts    │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘ │
├─────────────────────────────────────────────────────────┤
│                    API Layer (Next.js)                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                │
│  │/api/data │ │/api/stats│ │/api/health│                │
│  └──────────┘ └──────────┘ └──────────┘                │
├─────────────────────────────────────────────────────────┤
│                  Backend Services                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────┐│
│  │Python Engine │ │ Go Scanner   │ │ PostgreSQL DB    ││
│  └──────────────┘ └──────────────┘ └──────────────────┘│
└─────────────────────────────────────────────────────────┘
```

## Features

### Dashboard
The main dashboard provides a comprehensive overview with:
- Key metrics cards with 24h change indicators
- Interactive charts with multiple timeframes
- Data tables with sorting and filtering
- Real-time updates via WebSocket connections

### Analytics
Historical analytics with:
- 30-day trend visualization
- Comparative analysis across protocols
- Performance metrics and KPIs
- Export functionality for reports

### Settings
Configurable preferences:
- RPC endpoint selection
- Refresh interval configuration
- Alert thresholds
- Display preferences

## Project Structure

```
defi-yield-optimizer/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Dashboard
│   │   ├── analytics/          # Analytics page
│   │   ├── settings/           # Settings page
│   │   └── api/                # API routes
│   ├── components/             # React components
│   │   ├── charts/             # Chart components
│   │   ├── tables/             # Table components
│   │   ├── widgets/            # Widget components
│   │   ├── StatsCard.tsx       # Stats card component
│   │   ├── Chart.tsx           # Line chart component
│   │   └── DataTable.tsx       # Data table component
│   └── lib/                    # Core libraries
│       ├── hooks/              # Custom React hooks
│       ├── constants.ts        # App constants
│       ├── types.ts            # TypeScript types
│       └── utils.ts            # Utility functions
├── backend/                    # Python backend
│   ├── main.py                 # Main data processor
│   ├── data_processor.py       # Data transformation
│   ├── api_server.py           # FastAPI server
│   ├── services/               # Business logic services
│   ├── models/                 # Data models
│   └── utils/                  # Backend utilities
├── go-scanner/                 # Go blockchain scanner
│   ├── main.go                 # Scanner entry point
│   ├── scanner/                # Core scanner logic
│   ├── indexer/                # Event indexer
│   └── models/                 # Data models
├── database/                   # Database schemas
│   ├── 001_initial.sql         # Initial schema
│   └── queries/                # Common queries
├── config/                     # Configuration files
├── scripts/                    # Build & deploy scripts
├── tests/                      # Test suites
├── docs/                       # Documentation
├── AGENTS.md                   # AI agent guidelines
├── CLAUDE.md                   # Claude Code instructions
└── LICENSE                     # MIT License
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+
- Go 1.21+
- PostgreSQL 15+

### Installation

```bash
# Clone the repository
git clone https://github.com/nasrulniroi/defi-yield-optimizer.git
cd defi-yield-optimizer

# Install frontend dependencies
npm install

# Install Python backend dependencies
cd backend && pip install -r requirements.txt && cd ..

# Build Go scanner
cd go-scanner && go build -o scanner . && cd ..

# Set up database
psql -c "CREATE DATABASE defi_yield_optimizer"
psql defi_yield_optimizer < database/001_initial.sql

# Configure environment
cp .env.example .env
# Edit .env with your API keys

# Start development server
npm run dev
```

### Environment Variables

```env
DATABASE_URL=postgresql://user:pass@localhost:5432/defi_yield_optimizer
ETHEREUM_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
POLYGON_RPC_URL=https://polygon-mainnet.g.alchemy.com/v2/YOUR_KEY
ARBITRUM_RPC_URL=https://arb-mainnet.g.alchemy.com/v2/YOUR_KEY
```

## API Documentation

### GET /api/data
Returns the main dataset with pagination support.

### GET /api/health
Health check endpoint returning service status.

### GET /api/stats
Returns aggregated statistics and metrics.

### Python Backend (FastAPI)
- `GET /health` - Backend health check
- `GET /api/data` - Processed data endpoint
- `GET /api/stats` - Statistical aggregations

### Go Scanner
- `GET /health` - Scanner health check
- `GET /api/scan` - Latest scan results

## Testing

```bash
# Frontend tests
npm run test

# Backend tests
cd backend && pytest

# Go tests
cd go-scanner && go test ./...
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Docker

```bash
docker-compose up -d
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security

- All blockchain interactions are read-only
- No private keys stored or transmitted
- Rate limiting on all API endpoints
- Input validation and sanitization

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
