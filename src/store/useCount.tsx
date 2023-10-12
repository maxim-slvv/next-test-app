import { getCart } from '@/app/services/car.service';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type IUseCount = {
  count: number;
  countPlus: () => void;
  countMinus: () => void;
  checkAsync: () => void;
};

export const useCount = create<IUseCount>()(
  persist(
    (set, get) => ({
      count: 0,
      countPlus: () => set({ count: get().count + 1 }),
      countMinus: () => set({ count: get().count - 1 }),
      checkAsync: async () => {
        try {
          const res = await getCart();
          console.log(res);
          set({ count: 100500 });
        } catch (error) {
          set({ count: 0 });
        } finally {
          setTimeout(() => set({ count: 1 }), 1000);
        }
      },
    }),
    {
      name: 'count-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
