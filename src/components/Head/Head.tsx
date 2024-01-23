'use client';
import Script from 'next/script';

import React from 'react';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';

import { Globalstylesheet } from '@/components/Globalstylesheet';

type THeadProps = {
  site: any;
  seoMetaTags: any;
};

const CustomHead = ({ site, seoMetaTags }: THeadProps) => {
  const gaScript = () => `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C2LSGFTXPG');
    `;

  return (
    <>
      <Globalstylesheet />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-C2LSGFTXPG" />
      <Head>
        <script dangerouslySetInnerHTML={{ __html: gaScript() }} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#6ec5b6" />
        <meta name="medium" content="mult" />
        <meta name="Author" content="Jeff Weimer" />
        <meta name="keywords" content="Jeff Weimer" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Jeff Weimer | Frontend Engineer</title>

        {renderMetaTags(site.favicon)}
        {renderMetaTags(seoMetaTags)}
      </Head>
    </>
  );
};

export default CustomHead;
