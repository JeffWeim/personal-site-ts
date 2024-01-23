import Head from 'next/head';
import { draftMode } from 'next/headers';

import dynamic from 'next/dynamic';

import { request } from '@/lib/datocms';

const HomeView = dynamic(() => import('@/components/HomeView'), { ssr: false });

const HOMEPAGE_QUERY = `
  query {
    homePage {
      intro(markdown: false)
    }
  }
`;

const Home = async () => {
  const { isEnabled } = draftMode();

  const {
    homePage: { intro },
  } = await request({
    query: HOMEPAGE_QUERY,
    variables: {},
    includeDrafts: isEnabled,
  });

  return <HomeView intro={intro} />;
};

export default Home;
