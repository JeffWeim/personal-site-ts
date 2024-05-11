import { Analytics } from '@vercel/analytics/react';
import { draftMode } from 'next/headers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
// import { useQuerySubscription } from 'react-datocms/use-query-subscription';

import { Globalstylesheet } from '@/components/Globalstylesheet';
import StyledComponentsRegistry from '@/lib/registry';

import { request } from '@/lib/datocms';

import '../../public/fonts/fonts.css';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });

import Providers from '@/components/Providers';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = draftMode();

  const {
    global: {
      resume: { url },
    },
  } = await request({
    query: GLOBAL_QUERY,
    variables: {},
    includeDrafts: isEnabled,
  });

  // const { status, error, data } = useQuerySubscription({
  //   query: GLOBAL_QUERY,
  //   token: process.env.NEXT_DATOCMS_API_TOKEN!,
  //   preview: true,
  //   enabled: true,
  // });

  // console.log(data);

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Globalstylesheet />
            <Analytics />
            <SpeedInsights />

            <Header resumeUrl={url} />

            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
