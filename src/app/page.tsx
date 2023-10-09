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
