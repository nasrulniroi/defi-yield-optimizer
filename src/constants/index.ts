export const APP_NAME = 'DeFi Yield Optimizer';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Auto-compound yields across DeFi protocols';

export const API_BASE_URL = '/api';
export const REFRESH_INTERVAL = 30000;
export const MAX_SLIPPAGE = 0.5;
export const DEFAULT_GAS_STRATEGY = 'standard';

export const RISK_COLORS = {
  low: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  medium: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  high: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
} as const;

export const CHART_COLORS = {
  aave: '#818cf8',
  compound: '#34d399',
  yearn: '#60a5fa',
  convex: '#fbbf24',
} as const;

export const PROTOCOL_ADDRESSES = {
  aave: {
    pool: '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2',
    poolDataProvider: '0x7B4EB56E7CD4b454BA8ff71E4518426c3B4FDBF',
  },
  compound: {
    comptroller: '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B',
    cUSDC: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
  },
  yearn: {
    registry: '0x50c1a2eA0a861A967D9d0FFE2AE4012c2E053804',
  },
  convex: {
    booster: '0xF403C135812408BFbE8713b5A23a04b3D48AAE31',
  },
} as const;

export const TOKEN_ADDRESSES = {
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  stETH: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
} as const;
