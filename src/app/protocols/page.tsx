'use client';

import React from 'react';
import { ProtocolCards } from '@/components/protocols/ProtocolCards';

export default function ProtocolsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-white">Protocols</h1>
        <p className="text-surface-200 mt-1">Browse and compare DeFi protocols</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['All', 'Lending', 'Yield Aggregator', 'DEX'].map((cat) => (
          <button key={cat} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${cat === 'All' ? 'bg-primary-400/10 text-primary-400 border border-primary-400/20' : 'bg-surface-800 text-surface-200 hover:text-white border border-surface-700'}`}>
            {cat}
          </button>
        ))}
      </div>

      <ProtocolCards />
    </div>
  );
}
