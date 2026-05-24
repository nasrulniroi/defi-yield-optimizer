'use client';

import React from 'react';

export function QuickActions() {
  return (
    <div className="flex items-center space-x-3">
      <button className="btn-primary text-sm">
        <span className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Deposit</span>
        </span>
      </button>
      <button className="btn-secondary text-sm">
        <span className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Rebalance</span>
        </span>
      </button>
      <button className="btn-ghost text-sm border border-surface-700">
        Harvest All
      </button>
    </div>
  );
}
