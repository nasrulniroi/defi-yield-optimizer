'use client';

import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: { value: string; positive: boolean };
  className?: string;
}

export function StatCard({ title, value, subtitle, icon, trend, className = '' }: StatCardProps) {
  return (
    <div className={`stat-card group hover:border-primary-400/30 transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            trend.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
          }`}>
            {trend.value}
          </span>
        )}
      </div>
      <p className="text-sm text-surface-200 mt-3">{title}</p>
      <p className="text-2xl font-bold text-white animate-number">{value}</p>
      {subtitle && <p className="text-xs text-surface-200 mt-1">{subtitle}</p>}
    </div>
  );
}
