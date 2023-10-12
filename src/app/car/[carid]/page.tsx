'use client';

import { notFound, useRouter } from 'next/navigation';
import DashboardLayout from '@/app/dashboard/layout';
import styles from './Car.module.scss';
import { useCount } from '@/store/useCount';
import { useEffect, useState } from 'react';

// export async function generateMetadata({ params }: { params: { carid: string } }) {
//   return {
//     title: params.carid,
//   };
// }
export default function CarId({ params }: { params: { carid: string } }) {
  // const { push, replace } = useRouter();

  if (params.carid === '3') {
    notFound();
  }

  const { count, countPlus, countMinus, checkAsync } = useCount((state) => ({
    count: state.count,
    countPlus: state.countPlus,
    countMinus: state.countMinus,
    checkAsync: state.checkAsync,
  }));

  const [session, setSession] = useState<number>();
  useEffect(() => {
    setSession(count);
  }, [count]);

  return (
    <DashboardLayout>
      <div>{session}</div>
      <br />
      <button className={styles.button} onClick={() => countPlus()}>
        PLUS
      </button>
      <button className={styles.button} onClick={() => countMinus()}>
        MINUS
      </button>
      <br />
      <button className={styles.button} onClick={() => checkAsync()}>
        Check
      </button>
      <br />
      <br />
      <br />
      {/* My Post: {params.carid}
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
      </button> */}
    </DashboardLayout>
  );
}
