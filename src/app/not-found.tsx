import DashboardLayout from './dashboard/layout';
import Image from 'next/image';

export default function NotFound() {
  return (
    <DashboardLayout>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Image src="/404-bg.png" alt="404 page" width={500} height={299} priority />
    </DashboardLayout>
  );
}
