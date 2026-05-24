export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ProtocolData {
  id: string;
  name: string;
  slug: string;
  category: string;
  chain: string;
  chains: string[];
  tvl: number;
  change_1d: number;
  change_7d: number;
  change_1m: number;
  mcap: number;
  fdv: number;
  staking: number;
  pools: PoolData[];
}

export interface PoolData {
  id: string;
  chain: string;
  project: string;
  symbol: string;
  tvlUsd: number;
  apyBase: number;
  apyReward: number;
  apy: number;
  rewardTokens: string[];
  pool: string;
  apyMean30d: number;
  apyMean7d: number;
  volumeUsd1d: number;
  volumeUsd7d: number;
  stablecoin: boolean;
  ilRisk: string;
  exposure: string;
  predictions: {
    predictedClass: string;
    predictedProbability: number;
    binnedConfidence: number;
  };
}

export interface YieldSnapshot {
  timestamp: string;
  protocols: {
    protocol: string;
    apy: number;
    tvl: number;
  }[];
}

export interface GasEstimate {
  chain: string;
  standard: number;
  fast: number;
  instant: number;
  baseFee: number;
  priorityFee: number;
}
