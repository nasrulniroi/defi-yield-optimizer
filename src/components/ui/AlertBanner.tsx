'use client';

import React from 'react';

interface AlertBannerProps {
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
}

const styles = {
  info: 'bg-primary-400/10 border-primary-400/20 text-primary-400',
  warning: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  error: 'bg-red-500/10 border-red-500/20 text-red-400',
};

const icons = {
  info: '💡',
  warning: '⚠️',
  success: '✅',
  error: '❌',
};

export function AlertBanner({ type, message }: AlertBannerProps) {
  return (
    <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl border ${styles[type]}`}>
      <span>{icons[type]}</span>
      <p className="text-sm font-medium">{message}</p>
      <button className="ml-auto opacity-60 hover:opacity-100 transition-opacity">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
