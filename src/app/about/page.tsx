'use client';

import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {}

const AboutUsPage: NextPage<Props> = ({}) => {
  const query = useSearchParams();

  console.log(query.get('search'));

  return <div>sss</div>;
};

export default AboutUsPage;
