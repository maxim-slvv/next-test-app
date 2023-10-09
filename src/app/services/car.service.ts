import axios from 'axios';
import { ICar } from '../interfaces/pet.interface';

const API = process.env.API_URL;

axios.defaults.baseURL = API;

export const CarService = {
  async getDevil() {
    const { data } = await axios.get<ICar>('/pet/666');
    return data;
  },
  async getById(id: string) {
    const { data } = await axios.get<ICar>(`/pet/${id}`);
    return data;
  },
};
