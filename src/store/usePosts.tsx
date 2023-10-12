//*импорт функций
// import { getAllPosts, getPostsBySearch } from '@/services/getPosts';
import { create } from 'zustand';

type UsePosts = {
  posts: any[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    //* выполняем запрос
    // const posts = await getAllPosts()
    //* меняем стейт
    // set({ posts, loading: false })
  },
  getPostsBySearch: async (search) => {
    set({ loading: true });
    //* выполняем запрос
    // const posts = await getPostsBySearch(search)
    //* меняем стейт
    // set({ posts, loading: false })
  },
}));
