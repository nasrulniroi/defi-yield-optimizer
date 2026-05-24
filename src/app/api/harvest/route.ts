import { NextResponse } from 'next/server';

export async function POST() {
  const harvestResult = {
    harvested: [
      { token: 'CRV', amount: 142.5, value: 128.25 },
      { token: 'CVX', amount: 38.2, value: 95.50 },
      { token: 'COMP', amount: 12.8, value: 64.00 },
    ],
    totalValue: 287.75,
    gasUsed: 0.0032,
    gasCost: 8.45,
  };

  return NextResponse.json({
    data: harvestResult,
    success: true,
    message: 'Rewards harvested successfully',
    timestamp: new Date().toISOString(),
  });
}
