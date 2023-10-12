'use client';

import { NextPage } from 'next';
import { CarService, getStorm, getCart } from '../services/car.service';
import useSWR from 'swr';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
};

const AboutUsPage: NextPage<Product[]> = () => {
  const { data, isLoading } = useSWR('posts', getCart);
  console.log(data);
  return isLoading ? (
    <h1>Loading</h1>
  ) : data ? (
    data.map((item) => <h1 key={item.id}>{item.name}</h1>)
  ) : (
    <p>No data available</p>
  );
};

export default AboutUsPage;

//данные из поиска
// const query = useSearchParams();
// console.log(query.get('search'));
