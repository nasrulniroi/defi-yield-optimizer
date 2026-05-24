'use client';

import React from 'react';

export default function PortfolioPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        <p className="text-surface-200 mt-1">Track your DeFi positions and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Value', value: '$124,582.45', change: '+$6,420.12' },
          { label: 'Unrealized PNL', value: '+$12,842.30', change: '+10.3%' },
          { label: 'Rewards Claimable', value: '$1,247.80', change: 'Across 4 protocols' },
        ].map((stat, i) => (
          <div key={i} className="stat-card">
            <p className="text-sm text-surface-200">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-emerald-400">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Active Positions</h3>
        <table className="w-full">
          <thead>
            <tr className="text-left text-surface-200 text-sm border-b border-surface-700">
              <th className="pb-3">Protocol</th>
              <th className="pb-3">Pool</th>
              <th className="pb-3">Deposited</th>
              <th className="pb-3">Current</th>
              <th className="pb-3">PNL</th>
              <th className="pb-3">APY</th>
              <th className="pb-3">Auto</th>
            </tr>
          </thead>
          <tbody>
            {[
              { proto: 'Convex', pool: 'stETH-ETH', dep: '$28,000', cur: '$32,450', pnl: '+$4,450', apy: '8.2%', auto: true },
              { proto: 'Aave', pool: 'USDC', dep: '$25,000', cur: '$25,420', pnl: '+$420', apy: '5.1%', auto: true },
              { proto: 'Yearn', pool: 'WETH', dep: '$15,000', cur: '$18,200', pnl: '+$3,200', apy: '6.8%', auto: true },
              { proto: 'Compound', pool: 'DAI', dep: '$14,000', cur: '$15,310', pnl: '+$1,310', apy: '4.2%', auto: false },
            ].map((pos, i) => (
              <tr key={i} className="table-row">
                <td className="py-3 text-sm text-white">{pos.proto}</td>
                <td className="py-3 text-sm text-surface-200">{pos.pool}</td>
                <td className="py-3 text-sm text-white">{pos.dep}</td>
                <td className="py-3 text-sm text-white">{pos.cur}</td>
                <td className="py-3 text-sm text-emerald-400">{pos.pnl}</td>
                <td className="py-3 text-sm text-emerald-400">{pos.apy}</td>
                <td className="py-3">
                  <span className={`badge ${pos.auto ? 'badge-success' : 'badge-warning'}`}>
                    {pos.auto ? 'ON' : 'OFF'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
