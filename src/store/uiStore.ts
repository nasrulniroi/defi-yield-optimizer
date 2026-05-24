import { create } from 'zustand';

interface UIStore {
  sidebarCollapsed: boolean;
  activeModal: string | null;
  toasts: { id: string; message: string; type: 'success' | 'error' | 'info' }[];
  toggleSidebar: () => void;
  openModal: (id: string) => void;
  closeModal: () => void;
  addToast: (message: string, type: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarCollapsed: false,
  activeModal: null,
  toasts: [],
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
  addToast: (message, type) =>
    set((state) => ({
      toasts: [...state.toasts, { id: Date.now().toString(), message, type }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
