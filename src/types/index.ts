export interface Protocol {
  id: string;
  name: string;
  logo: string;
  category: 'lending' | 'yield' | 'dex' | 'staking';
  chain: string;
  tvl: number;
  apy: number;
  apyHistory: number[];
  risk: 'low' | 'medium' | 'high';
  tokens: string[];
  status: 'active' | 'paused' | 'deprecated';
  autoCompound: boolean;
  lastUpdated: string;
}

export interface YieldOpportunity {
  id: string;
  protocol: Protocol;
  pool: string;
  baseApy: number;
  rewardApy: number;
  totalApy: number;
  tvl: number;
  depositToken: string;
  rewardToken: string;
  lockPeriod: number;
  ilRisk: boolean;
  gasEstimate: number;
}

export interface PortfolioPosition {
  id: string;
  protocolId: string;
  protocol: string;
  pool: string;
  depositedValue: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
  apy: number;
  autoCompounded: boolean;
  rewards: RewardBalance[];
  depositDate: string;
  lastCompoundDate: string;
}

export interface RewardBalance {
  token: string;
  symbol: string;
  amount: number;
  value: number;
  price: number;
}

export interface Transaction {
  id: string;
  hash: string;
  type: 'deposit' | 'withdraw' | 'compound' | 'harvest' | 'rebalance' | 'swap';
  protocol: string;
  pool: string;
  amount: number;
  token: string;
  value: number;
  gasUsed: number;
  gasCost: number;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'failed';
}

export interface YieldHistory {
  timestamp: string;
  apy: number;
  tvl: number;
}

export interface RebalanceAction {
  id: string;
  fromProtocol: string;
  toProtocol: string;
  fromPool: string;
  toPool: string;
  amount: number;
  token: string;
  expectedApyImprovement: number;
  estimatedGas: number;
  status: 'pending' | 'executing' | 'completed' | 'failed';
  executedAt?: string;
}

export interface PortfolioStats {
  totalValue: number;
  totalPnl: number;
  totalPnlPercent: number;
  averageApy: number;
  totalRewards: number;
  totalGasSpent: number;
  positions: number;
  protocols: number;
}

export interface Alert {
  id: string;
  type: 'apy_change' | 'rebalance' | 'harvest' | 'risk' | 'system';
  severity: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface CalculatorInput {
  principal: number;
  apy: number;
  compoundingFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  duration: number;
  durationUnit: 'days' | 'months' | 'years';
  additionalDeposit: number;
  depositFrequency: 'daily' | 'weekly' | 'monthly';
}

export interface CalculatorResult {
  finalValue: number;
  totalDeposited: number;
  totalYield: number;
  effectiveApy: number;
  breakdown: { period: number; balance: number; yield: number }[];
}

export interface UserSettings {
  walletAddress: string;
  autoCompound: boolean;
  autoRebalance: boolean;
  rebalanceThreshold: number;
  maxSlippage: number;
  gasStrategy: 'slow' | 'standard' | 'fast';
  notifications: {
    email: boolean;
    push: boolean;
    telegram: boolean;
    apyThreshold: number;
  };
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  preferredProtocols: string[];
  blacklistedProtocols: string[];
}

export interface ImpermanentLossResult {
  ilPercent: number;
  ilValue: number;
  priceChangeA: number;
  priceChangeB: number;
  holdingValue: number;
  lpValue: number;
  difference: number;
}
