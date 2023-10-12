import { create } from 'zustand';

export interface IComment {
  id: number;
  message: string;
}

export interface IUseComment {
  data: IComment[];
  isLoading: boolean;
  checkAsync: (comment: IComment) => void;
}

export const useComment = create<IUseComment>((set, get) => ({
  data: [],
  isLoading: false,
  checkAsync: async () => {
    try {
      set({ isLoading: true });
      //   const res = await getCart();
      //   set({ data: [...get().data, ...res] });
    } catch (error: any) {
      set({ isLoading: false });
      console.log(error.message);
    }
  },
}));
