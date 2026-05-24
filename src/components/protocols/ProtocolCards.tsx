'use client';

import React from 'react';

const protocols = [
  {
    name: 'Aave V3',
    category: 'Lending',
    tvl: '$12.4B',
    apy: '3.2-8.5%',
    risk: 'Low',
    chains: ['Ethereum', 'Polygon', 'Arbitrum'],
    color: 'from-purple-500 to-purple-700',
    description: 'Decentralized lending protocol with variable and stable rates',
    status: 'active',
  },
  {
    name: 'Compound V3',
    category: 'Lending',
    tvl: '$8.2B',
    apy: '2.8-6.4%',
    risk: 'Low',
    chains: ['Ethereum', 'Polygon', 'Base'],
    color: 'from-green-500 to-green-700',
    description: 'Algorithmic money market protocol with compound interest',
    status: 'active',
  },
  {
    name: 'Yearn Finance',
    category: 'Yield Aggregator',
    tvl: '$4.1B',
    apy: '4.5-12.8%',
    risk: 'Medium',
    chains: ['Ethereum', 'Fantom'],
    color: 'from-blue-500 to-blue-700',
    description: 'Automated yield farming strategies with auto-compounding',
    status: 'active',
  },
  {
    name: 'Convex Finance',
    category: 'Yield',
    tvl: '$3.8B',
    apy: '5.2-15.4%',
    risk: 'Medium',
    chains: ['Ethereum'],
    color: 'from-amber-500 to-amber-700',
    description: 'Boosted Curve rewards without locking CRV tokens',
    status: 'active',
  },
];

export function ProtocolCards() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Integrated Protocols</h3>
        <span className="text-sm text-primary-400 cursor-pointer hover:underline">View All</span>
      </div>

      <div className="space-y-3">
        {protocols.map((protocol) => (
          <div
            key={protocol.name}
            className="flex items-center p-4 rounded-xl bg-surface-700/30 hover:bg-surface-700/50 transition-all cursor-pointer group"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${protocol.color} flex items-center justify-center text-white font-bold text-sm`}>
              {protocol.name.charAt(0)}
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-white">{protocol.name}</p>
                <span className={`badge ${protocol.risk === 'Low' ? 'badge-success' : 'badge-warning'}`}>
                  {protocol.risk}
                </span>
              </div>
              <p className="text-xs text-surface-200 mt-0.5">{protocol.category} • {protocol.tvl} TVL</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-emerald-400">{protocol.apy}</p>
              <p className="text-xs text-surface-200">APY Range</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
