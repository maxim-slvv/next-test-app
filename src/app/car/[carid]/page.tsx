import { notFound, useRouter } from 'next/navigation';
import DashboardLayout from '@/app/dashboard/layout';
import styles from './Car.module.scss';

export async function generateMetadata({ params }: { params: { carid: string } }) {
  return {
    title: params.carid,
  };
}

export default function CarId({ params }: { params: { carid: string } }) {
  // const { push, replace } = useRouter();

  if (params.carid === '3') {
    notFound();
  }

  return (
    <DashboardLayout>
      My Post: {params.carid}
      <br />
      <button
        className={styles.button}
        // onClick={() => push('/')}
      >
        push
      </button>
      <button
        className={styles.button}
        // onClick={() => replace('/')}
      >
        replace
      </button>
    </DashboardLayout>
  );
}
