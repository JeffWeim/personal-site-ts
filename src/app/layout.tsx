import { Analytics } from '@vercel/analytics/react';
import { draftMode } from 'next/headers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { request } from '@/lib/datocms';

// import { useQuerySubscription } from 'react-datocms/use-query-subscription';

import { Globalstylesheet } from '@/components/Globalstylesheet/Globalstylesheet';

import Header from '@/components/Header/Header';
import Palm from '@/components/Palm/Palm';
import Providers from '@/components/Providers/Providers';
import SunMoon from '@/components/SunMoon/SunMoon';

import StyledComponentsRegistry from '@/lib/registry';

import '../../public/fonts/fonts.css';

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

  // dato's api is not working. opened an issue on their github
  // const { status, error, data } = useQuerySubscription({
  //   query: GLOBAL_QUERY,
  //   token: process.env.NEXT_DATOCMS_API_TOKEN!,
  //   preview: true,
  //   enabled: true,
  // });

  return (
    <html lang="en">
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
