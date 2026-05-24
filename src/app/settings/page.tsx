'use client';

import React from 'react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-surface-200 mt-1">Configure your yield optimization preferences</p>
      </div>

      <div className="glass-card p-6 space-y-6">
        <h3 className="text-lg font-semibold text-white">Auto-Compound</h3>
        <div className="flex items-center justify-between p-4 rounded-xl bg-surface-700/30">
          <div>
            <p className="text-sm text-white">Enable Auto-Compounding</p>
            <p className="text-xs text-surface-200">Automatically reinvest rewards for maximum yield</p>
          </div>
          <button className="w-12 h-6 bg-primary-400 rounded-full relative">
            <span className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all" />
          </button>
        </div>
      </div>

      <div className="glass-card p-6 space-y-6">
        <h3 className="text-lg font-semibold text-white">Rebalancing</h3>
        <div className="flex items-center justify-between p-4 rounded-xl bg-surface-700/30">
          <div>
            <p className="text-sm text-white">Auto-Rebalance</p>
            <p className="text-xs text-surface-200">Move funds to highest-yielding protocols automatically</p>
          </div>
          <button className="w-12 h-6 bg-primary-400 rounded-full relative">
            <span className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all" />
          </button>
        </div>
        <div>
          <label className="text-sm text-surface-200 mb-2 block">Rebalance Threshold (APY difference %)</label>
          <input type="number" defaultValue={1.5} className="input-field w-48" />
        </div>
      </div>

      <div className="glass-card p-6 space-y-6">
        <h3 className="text-lg font-semibold text-white">Risk Tolerance</h3>
        <div className="grid grid-cols-3 gap-4">
          {['Conservative', 'Moderate', 'Aggressive'].map((risk, i) => (
            <button key={risk} className={`p-4 rounded-xl border transition-all ${i === 1 ? 'bg-primary-400/10 border-primary-400/20 text-primary-400' : 'bg-surface-700/30 border-surface-700 text-surface-200 hover:border-primary-400/20'}`}>
              <p className="text-sm font-medium">{risk}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 space-y-6">
        <h3 className="text-lg font-semibold text-white">Gas Strategy</h3>
        <div className="grid grid-cols-3 gap-4">
          {['Slow', 'Standard', 'Fast'].map((gas, i) => (
            <button key={gas} className={`p-4 rounded-xl border transition-all ${i === 1 ? 'bg-primary-400/10 border-primary-400/20 text-primary-400' : 'bg-surface-700/30 border-surface-700 text-surface-200 hover:border-primary-400/20'}`}>
              <p className="text-sm font-medium">{gas}</p>
            </button>
          ))}
        </div>
      </div>

      <button className="btn-primary">Save Settings</button>
    </div>
  );
}
