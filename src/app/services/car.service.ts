import axios from 'axios';
import { ICar } from '../interfaces/pet.interface';
import { Product } from '../about/page';

const API = process.env.API_URL;

// axios.defaults.baseURL = API;

export const CarService = {
  async getDevil() {
    const { data } = await axios.get<ICar>('/pet/666');
    return data;
  },
  async getStorm() {
    const res = await fetch(`/pet/666`);
    return res.json();
  },
  async getById(id: string) {
    const { data } = await axios.get<ICar>(`/pet/${id}`);
    return data;
  },
};

export const getStorm = async () => {
  const res = await fetch(`/next`);
  // console.log(`${process.env.API_URL}pet/1`);
  return res.json();
};
export const getCart = async () => {
  const { data } = await axios.get<Product[]>(`/base.json`);
  return data;
};
