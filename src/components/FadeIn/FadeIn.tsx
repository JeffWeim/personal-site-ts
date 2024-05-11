'use client';
import type { ReactNode } from 'react';
import { useIntersection } from 'react-use';
import React, { useState, useEffect } from 'react';

type TFadeInProps = {
  children: ReactNode;
  $delay?: number;
  reset?: Boolean;
};

import { Container } from './styles';

const FadeIn = ({ children, $delay = 0, reset = false }: TFadeInProps) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
  });

  const [$inView, set$inView] = useState(false);

  useEffect(() => {
    const $inViewNow =
      (intersection?.intersectionRatio &&
        intersection.intersectionRatio > 0.25) ||
      false;

    if ($inViewNow) {
      return set$inView($inViewNow);
    }
    if (reset) {
      return set$inView(false);
    }

    return undefined;
  }, [intersection?.intersectionRatio, reset]);

  return (
    <Container ref={intersectionRef} $inView={$inView} $delay={$delay}>
      {children}
    </Container>
  );
};

export default FadeIn;
