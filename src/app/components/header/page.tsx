'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Header.module.scss';

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const pathname = usePathname();

  return (
    <div>
      <Link href="/" className={pathname === '/' ? styles.active : ''}>
        На главную
      </Link>
      <Link href="/car/1" className={pathname === '/car/1' ? styles.active : ''}>
        Машина 1
      </Link>
    </div>
  );
};

export default Header;
