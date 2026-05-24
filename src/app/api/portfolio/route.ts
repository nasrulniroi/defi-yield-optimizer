import { NextResponse } from 'next/server';

export async function GET() {
  const portfolio = {
    totalValue: 124582.45,
    totalPnl: 12842.30,
    totalPnlPercent: 11.49,
    averageApy: 8.74,
    totalRewards: 4231.18,
    totalGasSpent: 342.50,
    positions: 12,
    protocols: 4,
    holdings: [
      { protocol: 'Convex', pool: 'stETH-ETH', value: 32450, apy: 8.2, pnl: 4450 },
      { protocol: 'Aave', pool: 'USDC', value: 25420, apy: 5.1, pnl: 420 },
      { protocol: 'Yearn', pool: 'WETH', value: 18200, apy: 6.8, pnl: 3200 },
      { protocol: 'Compound', pool: 'DAI', value: 15310, apy: 4.2, pnl: 1310 },
    ],
  };

  return NextResponse.json({
    data: portfolio,
    success: true,
    timestamp: new Date().toISOString(),
  });
}
