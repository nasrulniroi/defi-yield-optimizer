'use client';

import React from 'react';

const transactions = [
  { id: 1, type: 'compound', protocol: 'Convex', amount: '+$42.18', token: 'stETH-ETH', time: '2 min ago', hash: '0xabc...def', status: 'confirmed' },
  { id: 2, type: 'harvest', protocol: 'Yearn', amount: '+$18.50', token: 'WETH', time: '15 min ago', hash: '0x123...456', status: 'confirmed' },
  { id: 3, type: 'deposit', protocol: 'Aave', amount: '5,000', token: 'USDC', time: '1 hour ago', hash: '0x789...012', status: 'confirmed' },
  { id: 4, type: 'rebalance', protocol: 'Auto', amount: '2.5 ETH', token: 'ETH', time: '3 hours ago', hash: '0xdef...abc', status: 'confirmed' },
  { id: 5, type: 'withdraw', protocol: 'Compound', amount: '10,000', token: 'DAI', time: '6 hours ago', hash: '0x456...789', status: 'confirmed' },
];

const typeStyles: Record<string, string> = {
  compound: 'bg-emerald-500/10 text-emerald-400',
  harvest: 'bg-blue-500/10 text-blue-400',
  deposit: 'bg-purple-500/10 text-purple-400',
  withdraw: 'bg-amber-500/10 text-amber-400',
  rebalance: 'bg-primary-400/10 text-primary-400',
};

const typeIcons: Record<string, string> = {
  compound: '🔄',
  harvest: '🌾',
  deposit: '📥',
  withdraw: '📤',
  rebalance: '⚖️',
};

export function RecentTransactions() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
        <span className="text-sm text-primary-400 cursor-pointer hover:underline">View All</span>
      </div>

      <div className="space-y-2">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center p-3 rounded-xl hover:bg-surface-700/30 transition-all">
            <span className="text-lg mr-3">{typeIcons[tx.type]}</span>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className={`badge ${typeStyles[tx.type]}`}>{tx.type}</span>
                <span className="text-sm text-white">{tx.protocol}</span>
              </div>
              <p className="text-xs text-surface-200 mt-0.5">{tx.token} • {tx.time}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">{tx.amount}</p>
              <p className="text-xs text-surface-200">{tx.hash}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
