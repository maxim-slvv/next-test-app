'use client';

import { useRouter } from 'next/navigation';

export default function CarId({ params }: { params: { carid: string } }) {
  const {} = useRouter();

  return <div>My Post: {params.carid}</div>;
}
