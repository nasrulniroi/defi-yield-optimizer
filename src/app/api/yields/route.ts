import { NextResponse } from 'next/server';

export async function GET() {
  const yields = [
    { protocol: 'Aave V3', pool: 'USDC', baseApy: 3.2, rewardApy: 1.9, totalApy: 5.1, tvl: 2500000000 },
    { protocol: 'Aave V3', pool: 'WETH', baseApy: 2.1, rewardApy: 1.1, totalApy: 3.2, tvl: 3200000000 },
    { protocol: 'Compound V3', pool: 'USDC', baseApy: 2.8, rewardApy: 1.4, totalApy: 4.2, tvl: 1800000000 },
    { protocol: 'Yearn Finance', pool: 'WETH Vault', baseApy: 4.5, rewardApy: 2.3, totalApy: 6.8, tvl: 800000000 },
    { protocol: 'Yearn Finance', pool: 'USDC Vault', baseApy: 5.2, rewardApy: 2.1, totalApy: 7.3, tvl: 650000000 },
    { protocol: 'Convex Finance', pool: 'stETH-ETH', baseApy: 5.8, rewardApy: 2.4, totalApy: 8.2, tvl: 1200000000 },
    { protocol: 'Convex Finance', pool: '3pool', baseApy: 4.1, rewardApy: 3.2, totalApy: 7.3, tvl: 900000000 },
  ];

  return NextResponse.json({
    data: yields,
    success: true,
    timestamp: new Date().toISOString(),
  });
}
