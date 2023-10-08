import { NextPage } from 'next';
import Home from './components/screens/home/Home';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: '1' }, { id: ' 666' }];
}

async function getProjects(id: number) {
  const res = await fetch(`https://petstore.swagger.io/v2/pet/${id}`, { next: { revalidate: 60 } });
  const projects = await res.json();
  return projects;
}

const HomePage: NextPage = async () => {
  const cars = await getProjects(666);
  return <Home car={cars} />;
};

export default HomePage;

// import { GetServerSideProps, NextPage } from 'next';
// import Home from './components/screens/home/Home';
// import { ICar, ICarProps } from './interfaces/pet.interface';
// import { CarService } from './services/car.service';

// export const getProjects = (): GetServerSideProps<ICar> => async () => {
//   const cars = await CarService.getDevil();
//   // const res = await fetch(`https://...`, { cache: 'no-store' })
//   return {
//     props: cars,
//   };
// };

// const HomePage: NextPage = async () => {

//   const cars = await getProjects();

//   return <Home car={cars} />;
// };

// export default HomePage;
