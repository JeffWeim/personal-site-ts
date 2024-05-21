import { draftMode } from 'next/headers';
import type { Metadata } from 'next';

import dynamic from 'next/dynamic';

import { request } from '@/lib/datocms';

import HomeView from '@/components/HomeView/HomeView';

const HOMEPAGE_QUERY = `
  query {
    homePage {
      intro(markdown: false)
    }
  }
`;

export const metadata: Metadata = {
  icons: {
    icon: 'favicon.ico',
  },
  title: 'Jeff Weimer | Frontend Engineer',
  description:
    'A Frontend engineer specializing in highly performant and beautiful UIs',
  keywords:
    'Frontend, engineer, react, typescript, web, mobile, software, nextjs, webpack, design system, TDD, testing, jest, cypress',
};

const Home = async () => {
  const { isEnabled } = draftMode();
  const isDevelopment = process.env.NODE_ENV === 'development';

  const {
    homePage: { intro },
  } = await request({
    query: HOMEPAGE_QUERY,
    variables: {},
    includeDrafts: isEnabled || isDevelopment,
  });

  return <HomeView intro={intro} />;
};

export default Home;
