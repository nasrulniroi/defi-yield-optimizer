import { create } from 'zustand';

interface YieldStore {
  selectedProtocols: string[];
  autoCompoundEnabled: boolean;
  autoRebalanceEnabled: boolean;
  rebalanceThreshold: number;
  notifications: boolean;
  addProtocol: (id: string) => void;
  removeProtocol: (id: string) => void;
  toggleAutoCompound: () => void;
  toggleAutoRebalance: () => void;
  setRebalanceThreshold: (threshold: number) => void;
  toggleNotifications: () => void;
}

export const useYieldStore = create<YieldStore>((set) => ({
  selectedProtocols: ['aave-v3', 'compound-v3', 'yearn-finance', 'convex-finance'],
  autoCompoundEnabled: true,
  autoRebalanceEnabled: true,
  rebalanceThreshold: 1.5,
  notifications: true,
  addProtocol: (id) => set((state) => ({ selectedProtocols: [...state.selectedProtocols, id] })),
  removeProtocol: (id) => set((state) => ({ selectedProtocols: state.selectedProtocols.filter((p) => p !== id) })),
  toggleAutoCompound: () => set((state) => ({ autoCompoundEnabled: !state.autoCompoundEnabled })),
  toggleAutoRebalance: () => set((state) => ({ autoRebalanceEnabled: !state.autoRebalanceEnabled })),
  setRebalanceThreshold: (threshold) => set({ rebalanceThreshold: threshold }),
  toggleNotifications: () => set((state) => ({ notifications: !state.notifications })),
}));
