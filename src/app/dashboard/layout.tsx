import Header from '../components/header/page';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('../footer/page'), {
  ssr: false,
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
      <DynamicHeader />
    </section>
  );
}
