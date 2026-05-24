'use client';

import React from 'react';

const mockData = [
  { month: 'Jan', aave: 3.2, compound: 2.8, yearn: 4.1, convex: 5.3 },
  { month: 'Feb', aave: 3.5, compound: 3.1, yearn: 4.5, convex: 5.8 },
  { month: 'Mar', aave: 4.1, compound: 3.4, yearn: 5.2, convex: 6.1 },
  { month: 'Apr', aave: 3.8, compound: 3.2, yearn: 4.8, convex: 5.5 },
  { month: 'May', aave: 4.5, compound: 3.8, yearn: 5.5, convex: 6.8 },
  { month: 'Jun', aave: 5.1, compound: 4.2, yearn: 6.1, convex: 7.2 },
  { month: 'Jul', aave: 4.8, compound: 4.0, yearn: 5.8, convex: 7.0 },
  { month: 'Aug', aave: 5.3, compound: 4.5, yearn: 6.4, convex: 7.5 },
  { month: 'Sep', aave: 5.0, compound: 4.3, yearn: 6.0, convex: 7.1 },
  { month: 'Oct', aave: 5.5, compound: 4.7, yearn: 6.5, convex: 7.8 },
  { month: 'Nov', aave: 6.1, compound: 5.0, yearn: 7.0, convex: 8.2 },
  { month: 'Dec', aave: 5.8, compound: 4.8, yearn: 6.8, convex: 8.0 },
];

export function YieldComparison() {
  const maxVal = 10;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Yield Comparison</h3>
          <p className="text-sm text-surface-200">APY performance across protocols (12 months)</p>
        </div>
        <div className="flex items-center space-x-4">
          {[
            { name: 'Aave', color: 'bg-purple-400' },
            { name: 'Compound', color: 'bg-green-400' },
            { name: 'Yearn', color: 'bg-blue-400' },
            { name: 'Convex', color: 'bg-amber-400' },
          ].map((p) => (
            <div key={p.name} className="flex items-center space-x-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${p.color}`} />
              <span className="text-xs text-surface-200">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-surface-200">
          {[10, 8, 6, 4, 2, 0].map((v) => (
            <span key={v}>{v}%</span>
          ))}
        </div>

        {/* Chart area */}
        <div className="ml-10 relative h-full">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border-b border-surface-700/50 h-0" />
            ))}
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end justify-between px-2 pb-6">
            {mockData.map((d, i) => (
              <div key={i} className="flex items-end space-x-0.5 group">
                <div className="w-2.5 bg-purple-400/80 rounded-t transition-all duration-300 group-hover:bg-purple-400" style={{ height: `${(d.aave / maxVal) * 100}%` }} />
                <div className="w-2.5 bg-green-400/80 rounded-t transition-all duration-300 group-hover:bg-green-400" style={{ height: `${(d.compound / maxVal) * 100}%` }} />
                <div className="w-2.5 bg-blue-400/80 rounded-t transition-all duration-300 group-hover:bg-blue-400" style={{ height: `${(d.yearn / maxVal) * 100}%` }} />
                <div className="w-2.5 bg-amber-400/80 rounded-t transition-all duration-300 group-hover:bg-amber-400" style={{ height: `${(d.convex / maxVal) * 100}%` }} />
              </div>
            ))}
          </div>
        </div>

        {/* X-axis labels */}
        <div className="ml-10 flex justify-between px-2 mt-2">
          {mockData.map((d, i) => (
            <span key={i} className="text-xs text-surface-200">{d.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
