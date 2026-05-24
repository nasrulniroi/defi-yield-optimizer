'use client';

import React from 'react';

const positions = [
  { protocol: 'Convex', pool: 'stETH-ETH', value: 32450, apy: 8.2, pnl: 1250 },
  { protocol: 'Aave', pool: 'USDC', value: 25000, apy: 5.1, pnl: 420 },
  { protocol: 'Yearn', pool: 'WETH', value: 18200, apy: 6.8, pnl: 680 },
  { protocol: 'Compound', pool: 'DAI', value: 15000, apy: 4.2, pnl: 310 },
];

const totalValue = positions.reduce((sum, p) => sum + p.value, 0);

export function PortfolioSummary() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Portfolio Breakdown</h3>

      {/* Donut visualization */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            {positions.reduce<{ offset: number; elements: React.ReactNode[] }>((acc, pos, i) => {
              const percent = (pos.value / totalValue) * 100;
              const colors = ['#818cf8', '#a78bfa', '#60a5fa', '#34d399'];
              const circumference = 2 * Math.PI * 35;
              const dashLength = (percent / 100) * circumference;
              acc.elements.push(
                <circle
                  key={i}
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke={colors[i]}
                  strokeWidth="12"
                  strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                  strokeDashoffset={-acc.offset}
                  className="transition-all duration-500"
                />
              );
              acc.offset += dashLength;
              return acc;
            }, { offset: 0, elements: [] }).elements}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-surface-200">Total</span>
            <span className="text-lg font-bold text-white">${(totalValue / 1000).toFixed(1)}K</span>
          </div>
        </div>
      </div>

      {/* Position list */}
      <div className="space-y-3">
        {positions.map((pos, i) => {
          const colors = ['bg-purple-400', 'bg-violet-400', 'bg-blue-400', 'bg-emerald-400'];
          return (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-surface-700/30 hover:bg-surface-700/50 transition-all">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${colors[i]}`} />
                <div>
                  <p className="text-sm font-medium text-white">{pos.protocol}</p>
                  <p className="text-xs text-surface-200">{pos.pool}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-white">${pos.value.toLocaleString()}</p>
                <p className="text-xs text-emerald-400">+{pos.apy}% APY</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
