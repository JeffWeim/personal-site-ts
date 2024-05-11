import { draftMode } from 'next/headers';

import PortfolioView from '@/components/PortfolioView';
import { request } from '@/lib/datocms';

const PORTFOLIO_QUERY = `
  {
    aboutPage {
      image {
        url(imgixParams: {auto: format, q: "80"})
        alt
      }
      skills(markdown: false)
      text(markdown: false)
      projects {
        description
        link
        name
        images {
          alt
          url(imgixParams: {auto: format, q: "80"})
        }
      }
    }
  }
`;

const Portfolio = async () => {
  const { isEnabled } = draftMode();
  const isDevelopment = process.env.NODE_ENV === 'development';

  const { aboutPage: portfolioPage } = await request({
    query: PORTFOLIO_QUERY,
    variables: {},
    includeDrafts: isEnabled || isDevelopment,
  });

  debugger;

  return <PortfolioView portfolioPage={portfolioPage} />;
};

export default Portfolio;
