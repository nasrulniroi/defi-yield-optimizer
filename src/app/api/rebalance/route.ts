import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  const actions = [
    {
      id: 'rb-001',
      fromProtocol: 'Aave',
      toProtocol: 'Convex',
      fromPool: 'USDC',
      toPool: 'stETH-ETH',
      amount: body.amount || 5000,
      expectedApyImprovement: 3.1,
      estimatedGas: 0.0045,
      status: 'pending',
    },
  ];

  return NextResponse.json({
    data: actions,
    success: true,
    message: 'Rebalance suggestions generated',
    timestamp: new Date().toISOString(),
  });
}
