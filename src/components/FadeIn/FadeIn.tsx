'use client';
import type { ReactNode } from 'react';
import React, { useEffect, useMemo, useState } from 'react';

type TFadeInProps = {
  children: ReactNode;
  $delay?: number;
  reset?: boolean;
};

import { Container } from './styles';

function useClientIntersection(ref: React.RefObject<HTMLElement>, threshold?: number) {
  const [intersection, setIntersection] = useState<{ intersectionRatio?: number } | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersection({ intersectionRatio: entry.intersectionRatio });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return intersection;
}

const FadeIn = ({ children, $delay = 0, reset = false }: TFadeInProps) => {
  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useClientIntersection(intersectionRef as React.RefObject<HTMLElement>, 0.25);

  const $inView = useMemo(() => {
    if (reset) return false;
    return !!(intersection?.intersectionRatio && intersection.intersectionRatio > 0.25);
  }, [intersection?.intersectionRatio, reset]);

  return (
    <Container ref={intersectionRef} $inView={$inView} $delay={$delay}>
      {children}
    </Container>
  );
};

export default FadeIn;
