'use client';

import React from 'react';

const stats = [
  { label: 'Total Portfolio Value', value: '$124,582.45', change: '+5.23%', positive: true, icon: '💰' },
  { label: 'Average APY', value: '8.74%', change: '+0.32%', positive: true, icon: '📈' },
  { label: 'Total Rewards Earned', value: '$4,231.18', change: '+$142.50 today', positive: true, icon: '🎁' },
  { label: 'Active Positions', value: '12', change: 'Across 4 protocols', positive: true, icon: '📊' },
  { label: 'Auto-Compounds (24h)', value: '47', change: 'Saved $23.40 in gas', positive: true, icon: '⚡' },
  { label: 'Impermanent Loss', value: '-$128.40', change: '-0.10%', positive: false, icon: '⚠️' },
];

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card group hover:border-primary-400/30 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-2xl">{stat.icon}</span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              stat.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
            }`}>
              {stat.change}
            </span>
          </div>
          <p className="text-sm text-surface-200">{stat.label}</p>
          <p className="text-2xl font-bold text-white animate-number">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
