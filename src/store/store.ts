import create from "zustand";

interface UseStore {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
}

export const useStore = create<UseStore>((set) => ({
  count: 0,
  plusCount() {
    set((state) => ({ count: state.count + 1 }));
  },
  minusCount() {
    set((state) => ({ count: state.count - 1 }));
  },
}));
