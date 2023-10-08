import { NextPage } from 'next';
import { ICarProps } from '@/app/interfaces/pet.interface';
import Image from 'next/image';

const CarItem: NextPage<ICarProps> = ({ car }) => {
  return typeof car?.id === 'number' ? (
    <section>
      <span>{car.name}</span>
      {/* <span>{car.category.name}</span> */}
      <Image src={`${car.photoUrls}`} width={200} height={200} alt="car" priority />
      <span>{car.status}</span>
    </section>
  ) : (
    <span>Нет данных</span>
  );
};

export default CarItem;
