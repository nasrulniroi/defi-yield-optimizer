import { formatCurrency, formatPercent, formatNumber, formatAddress, formatHash, formatTimeAgo, clamp } from './format';

export function calculateAPY(apr: number, compoundingFrequency: number = 365): number {
  return (Math.pow(1 + apr / compoundingFrequency, compoundingFrequency) - 1) * 100;
}

export function calculateCompoundInterest(
  principal: number,
  rate: number,
  periods: number,
  years: number
): number {
  return principal * Math.pow(1 + rate / periods, periods * years);
}

export function calculateImpermanentLoss(
  priceChangePercent: number
): number {
  const ratio = 1 + priceChangePercent / 100;
  const il = (2 * Math.sqrt(ratio)) / (1 + ratio) - 1;
  return il * 100;
}

export function calculateIL(
  initialPriceA: number,
  initialPriceB: number,
  currentPriceA: number,
  currentPriceB: number
): { ilPercent: number; holdingValue: number; lpValue: number } {
  const priceRatio = (currentPriceA / initialPriceA) / (currentPriceB / initialPriceB);
  const sqrtRatio = Math.sqrt(priceRatio);
  const lpRatio = (2 * sqrtRatio) / (1 + priceRatio);
  const ilPercent = (lpRatio - 1) * 100;

  const holdingValue = initialPriceA + initialPriceB;
  const lpValue = holdingValue * lpRatio;

  return { ilPercent, holdingValue, lpValue };
}

export function calculateTVLWeightedAPY(
  pools: { tvl: number; apy: number }[]
): number {
  const totalTvl = pools.reduce((sum, p) => sum + p.tvl, 0);
  return pools.reduce((sum, p) => sum + (p.apy * p.tvl) / totalTvl, 0);
}

export function estimateGasCost(
  gasUsed: number,
  gasPriceGwei: number,
  ethPrice: number
): number {
  return (gasUsed * gasPriceGwei * 1e-9) * ethPrice;
}

export function calculateSlippage(
  expectedAmount: number,
  actualAmount: number
): number {
  return ((expectedAmount - actualAmount) / expectedAmount) * 100;
}

export function projectYield(
  principal: number,
  apy: number,
  days: number,
  additionalDailyDeposit: number = 0
): { totalValue: number; totalDeposited: number; totalYield: number } {
  const dailyRate = apy / 100 / 365;
  let balance = principal;
  let totalDeposited = principal;

  for (let i = 0; i < days; i++) {
    balance = balance * (1 + dailyRate) + additionalDailyDeposit;
    totalDeposited += additionalDailyDeposit;
  }

  return {
    totalValue: balance,
    totalDeposited,
    totalYield: balance - totalDeposited,
  };
}
