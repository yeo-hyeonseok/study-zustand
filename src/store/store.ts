import create from "zustand";
import { devtools } from "zustand/middleware";

interface UseStore {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
}

const store = (set: any) => ({
  count: 0,
  plusCount() {
    set((state: any) => ({ count: state.count + 1 }));
  },
  minusCount() {
    set((state: any) => ({ count: state.count - 1 }));
  },
});

export const useStore = create<UseStore>()(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);
