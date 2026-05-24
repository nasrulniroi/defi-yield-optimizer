import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const principal = Number(searchParams.get('principal')) || 10000;
  const apy = Number(searchParams.get('apy')) || 8;
  const years = Number(searchParams.get('years')) || 5;
  const frequency = searchParams.get('frequency') || 'daily';

  const frequencies: Record<string, number> = { daily: 365, weekly: 52, monthly: 12, yearly: 1 };
  const n = frequencies[frequency] || 365;
  const result = principal * Math.pow(1 + apy / 100 / n, n * years);

  return NextResponse.json({
    data: {
      principal,
      apy,
      years,
      frequency,
      finalValue: result,
      totalYield: result - principal,
      effectiveApy: ((result / principal - 1) / years) * 100,
    },
    success: true,
    timestamp: new Date().toISOString(),
  });
}
