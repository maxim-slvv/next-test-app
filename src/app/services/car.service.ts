import axios from 'axios';
import { ICar } from '../interfaces/pet.interface';

const API_URL = 'https://petstore.swagger.io/v2/';

axios.defaults.baseURL = 'API_URL';

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