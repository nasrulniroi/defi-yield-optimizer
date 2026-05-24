'use client';

import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  color = 'bg-primary-400',
  showLabel = true,
  size = 'md',
  animated = true,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-surface-200">{percentage.toFixed(1)}%</span>
        </div>
      )}
      <div className={`w-full ${heights[size]} bg-surface-700 rounded-full overflow-hidden`}>
        <div
          className={`${color} ${heights[size]} rounded-full ${animated ? 'transition-all duration-500' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
