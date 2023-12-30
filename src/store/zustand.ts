import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  data: any;
  setData: (by: any) => void;
  topOpenings: any;
  setTopOpenings: (by: any) => void;
}

export const useChessStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        data: null,
        setData: (by) => set((state) => ({ data: by })),
        topOpenings: null,
        setTopOpenings: (by) => set((state) => ({ topOpenings: by })),
      }),
      { name: "chessStore" }
    )
  )
);
