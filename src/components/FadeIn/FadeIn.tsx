'use client';
import type { ReactNode } from 'react';
import React, { useEffect, useMemo, useState, useRef } from 'react';

type TFadeInProps = {
  children: ReactNode;
  $delay?: number;
  reset?: boolean;
};

import { Container } from './styles';

// Shared observer management
type ObservedElement = {
  element: HTMLElement;
  callback: (entry: IntersectionObserverEntry) => void;
};

let observer: IntersectionObserver | null = null;
const observedElements = new Set<ObservedElement>();

const getSharedObserver = (threshold?: number) => {
  if (typeof window === 'undefined') return null;

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const observed = Array.from(observedElements).find(
            (obs) => obs.element === entry.target
          );
          if (observed) {
            observed.callback(entry);
          }
        });
      },
      { threshold }
    );
  }

  return observer;
};

const useClientIntersection = (ref: React.RefObject<HTMLElement | null>, threshold?: number) => {
  const [intersection, setIntersection] = useState<{ intersectionRatio?: number } | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const element = ref.current;
    if (!element) return;

    const observerInstance = getSharedObserver(threshold);
    if (!observerInstance) return;

    const callback = (entry: IntersectionObserverEntry) => {
      setIntersection({ intersectionRatio: entry.intersectionRatio });
    };

    observedElements.add({ element, callback });
    observerInstance.observe(element);

    return () => {
      observedElements.delete({ element, callback });
      observerInstance.unobserve(element);
      // Clean up observer if no elements are being observed
      if (observedElements.size === 0 && observerInstance) {
        observerInstance.disconnect();
        observer = null;
      }
    };
  }, [ref, threshold]);

  return intersection;
};

const FadeIn = ({ children, $delay = 0, reset = false }: TFadeInProps) => {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useClientIntersection(intersectionRef, 0.25);

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
