import { NextResponse } from 'next/server';

export async function GET() {
  const alerts = [
    { id: '1', type: 'apy_change', severity: 'info', title: 'APY Increase', message: 'Convex stETH-ETH APY increased to 8.2%', timestamp: new Date().toISOString(), read: false },
    { id: '2', type: 'rebalance', severity: 'info', title: 'Rebalance Opportunity', message: 'Move funds from Aave to Convex for +3.1% APY', timestamp: new Date().toISOString(), read: false },
    { id: '3', type: 'harvest', severity: 'info', title: 'Rewards Available', message: '$287.75 in claimable rewards across 3 protocols', timestamp: new Date().toISOString(), read: true },
  ];

  return NextResponse.json({
    data: alerts,
    success: true,
    timestamp: new Date().toISOString(),
  });
}
