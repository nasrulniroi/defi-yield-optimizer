'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppState {
  theme: 'dark' | 'light';
  chain: string;
  walletConnected: boolean;
  walletAddress: string;
  setTheme: (theme: 'dark' | 'light') => void;
  setChain: (chain: string) => void;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [chain, setChain] = useState('ethereum');
  const [walletConnected, setWalletConnected] = useState(true);
  const [walletAddress, setWalletAddress] = useState('0x1234567890abcdef1234567890abcdef12345678');

  const connectWallet = () => {
    setWalletConnected(true);
    setWalletAddress('0x1234567890abcdef1234567890abcdef12345678');
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress('');
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        chain,
        walletConnected,
        walletAddress,
        setTheme,
        setChain,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
