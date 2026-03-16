'use client';

import type { ReactNode } from 'react';

import Link from 'next/link';

import { AnchorElement } from './styles';

type TLinkElementProps = {
  children: ReactNode;
  external: boolean;
  fillContainer?: boolean;
  href?: string;
  passHref?: boolean;
  textDecoration?: boolean;
};

const LinkElement = ({
  children,
  external = false,
  fillContainer = false,
  href,
  passHref = false,
  textDecoration = false,
}: TLinkElementProps) => {
  const linkStyle = fillContainer
    ? {
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'relative' as const,
      }
    : undefined;

  return (
    <Link
      href={href || ''}
      passHref={passHref}
      target={external ? '_blank' : undefined}
      style={linkStyle}
    >
      <AnchorElement $textDecoration={textDecoration}>{children}</AnchorElement>
    </Link>
  );
};

export default LinkElement;
