'use client';

import React from 'react';

export function Header() {
  return (
    <header className="h-16 bg-surface-800/50 backdrop-blur-xl border-b border-surface-700/50 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search protocols, pools, tokens..."
            className="pl-10 pr-4 py-2 bg-surface-700/50 border border-surface-600 rounded-xl text-sm text-white placeholder-surface-200/50 focus:outline-none focus:border-primary-400 w-80 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-emerald-400 font-medium">Connected</span>
        </div>

        <button className="relative p-2 text-surface-200 hover:text-white hover:bg-surface-700/50 rounded-xl transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">3</span>
        </button>

        <div className="flex items-center space-x-3 pl-4 border-l border-surface-700">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
            N
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-white">0x1234...5678</p>
            <p className="text-xs text-surface-200">Ethereum Mainnet</p>
          </div>
        </div>
      </div>
    </header>
  );
}
