'use client';

import React, { useState } from 'react';

export default function CalculatorPage() {
  const [principal, setPrincipal] = useState(10000);
  const [apy, setApy] = useState(8);
  const [years, setYears] = useState(5);
  const [compound, setCompound] = useState('daily');

  const frequencies: Record<string, number> = { daily: 365, weekly: 52, monthly: 12, yearly: 1 };
  const n = frequencies[compound];
  const result = principal * Math.pow(1 + apy / 100 / n, n * years);
  const yield_ = result - principal;

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-white">Yield Calculator</h1>
        <p className="text-surface-200 mt-1">Estimate your potential returns</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 space-y-6">
          <div>
            <label className="text-sm text-surface-200 mb-2 block">Principal Amount ($)</label>
            <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="input-field" />
          </div>
          <div>
            <label className="text-sm text-surface-200 mb-2 block">Annual Percentage Yield (%)</label>
            <input type="number" value={apy} onChange={(e) => setApy(Number(e.target.value))} className="input-field" />
          </div>
          <div>
            <label className="text-sm text-surface-200 mb-2 block">Duration (Years)</label>
            <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-primary-400" />
            <span className="text-sm text-white">{years} years</span>
          </div>
          <div>
            <label className="text-sm text-surface-200 mb-2 block">Compounding Frequency</label>
            <div className="grid grid-cols-4 gap-2">
              {['daily', 'weekly', 'monthly', 'yearly'].map((f) => (
                <button key={f} onClick={() => setCompound(f)} className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${compound === f ? 'bg-primary-400/10 text-primary-400 border border-primary-400/20' : 'bg-surface-700 text-surface-200 border border-surface-600'}`}>
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-6 space-y-6">
          <h3 className="text-lg font-semibold text-white">Results</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-surface-700/30">
              <p className="text-sm text-surface-200">Final Value</p>
              <p className="text-3xl font-bold gradient-text">${result.toFixed(2)}</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-700/30">
              <p className="text-sm text-surface-200">Total Yield Earned</p>
              <p className="text-2xl font-bold text-emerald-400">+${yield_.toFixed(2)}</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-700/30">
              <p className="text-sm text-surface-200">Effective APY (with compounding)</p>
              <p className="text-xl font-bold text-white">{((result / principal - 1) / years * 100).toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
