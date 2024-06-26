import type { ReactNode } from 'react';
import React from 'react';

import Link from 'next/link';

import { AnchorElement } from './styles';

type TLinkElementProps = {
  children: ReactNode;
  external: boolean;
  href?: string;
  passHref?: boolean;
  textDecoration?: boolean;
};

const LinkElement = ({
  children,
  external = false,
  href,
  passHref = false,
  textDecoration = false,
}: TLinkElementProps) => {
  return (
    <Link
      href={href || ''}
      passHref={passHref}
      target={external ? '_blank' : undefined}
    >
      <AnchorElement
        target={external ? '_blank' : undefined}
        $textDecoration={textDecoration}
      >
        {children}
      </AnchorElement>
    </Link>
  );
};

export default LinkElement;
