import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { draftMode } from 'next/headers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { request } from '@/lib/datocms';
import { Raleway } from 'next/font/google';

import { Globalstylesheet } from '@/components/Globalstylesheet/Globalstylesheet';

import Header from '@/components/Header/Header';
import Palm from '@/components/Palm/Palm';
import Providers from '@/components/Providers/Providers';
import SunMoon from '@/components/SunMoon/SunMoon';

import StyledComponentsRegistry from '@/lib/registry';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata = {
  links: [
    {
      rel: 'preconnect',
      href: 'https://graphql.datocms.com',
    },
    {
      rel: 'preconnect',
      href: 'https://www.datocms-assets.com',
    },
  ],
};

const GLOBAL_QUERY = `
  {
    global {
      resume {
        url
      }
      _seoMetaTags {
        tag
        content
        attributes
      }
    }
    _site {
      globalSeo {
        fallbackSeo {
          description
          title
          image {
            url
          }
        }
        siteName
        titleSuffix
      }
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;

type TRootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: TRootLayoutProps) {
  const { isEnabled } = await draftMode();

  const {
    global: {
      resume: { url },
    },
  } = await request({
    query: GLOBAL_QUERY,
    variables: {},
    includeDrafts: isEnabled,
  });

  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Globalstylesheet />
            <Analytics />
            <SpeedInsights />

            <Header resumeUrl={url} />

            <SunMoon />

            {children}

            <Palm />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
