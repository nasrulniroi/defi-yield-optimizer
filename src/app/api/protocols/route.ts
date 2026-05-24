import { NextResponse } from 'next/server';

const protocols = [
  { id: 'aave-v3', name: 'Aave V3', category: 'lending', chain: 'ethereum', tvl: 12400000000, apy: 5.1, risk: 'low', status: 'active' },
  { id: 'compound-v3', name: 'Compound V3', category: 'lending', chain: 'ethereum', tvl: 8200000000, apy: 4.2, risk: 'low', status: 'active' },
  { id: 'yearn-finance', name: 'Yearn Finance', category: 'yield', chain: 'ethereum', tvl: 4100000000, apy: 6.8, risk: 'medium', status: 'active' },
  { id: 'convex-finance', name: 'Convex Finance', category: 'yield', chain: 'ethereum', tvl: 3800000000, apy: 8.2, risk: 'medium', status: 'active' },
];

export async function GET() {
  return NextResponse.json({
    data: protocols,
    success: true,
    timestamp: new Date().toISOString(),
  });
}
