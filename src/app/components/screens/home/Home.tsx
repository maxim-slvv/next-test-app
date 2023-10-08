import { NextPage } from 'next';
import { ICarProps } from '@/app/interfaces/pet.interface';
import DashboardLayout from '@/app/dashboard/layout';
import CarItem from '@/app/ui/car/CarItem';

const Home: NextPage<ICarProps> = (props) => {
  return (
    <DashboardLayout>
      <h1>Главная</h1>
      <CarItem car={props.car} />
    </DashboardLayout>
  );
};

export default Home;
