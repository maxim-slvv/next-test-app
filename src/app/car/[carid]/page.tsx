'use client';

import { useRouter } from 'next/navigation';
import DashboardLayout from '@/app/dashboard/layout';
import styles from './Car.module.scss';

export default function CarId({ params }: { params: { carid: string } }) {
  const { push, replace } = useRouter();

  return (
    <DashboardLayout>
      My Post: {params.carid}
      <br />
      <button className={styles.button} onClick={() => push('/')}>
        push
      </button>
      <button className={styles.button} onClick={() => replace('/')}>
        replace
      </button>
    </DashboardLayout>
  );
}
