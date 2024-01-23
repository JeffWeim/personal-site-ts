'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

const PaddedView = dynamic(() => import('@/components/PaddedView'), {
  ssr: false,
});
const FadeIn = dynamic(() => import('@/components/FadeIn'), { ssr: false });
const SunMoon = dynamic(() => import('@/components/SunMoon'), { ssr: false });

import { Section } from './styles';

if (typeof window !== 'undefined') {
  import('@google/model-viewer');
}

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

const ModelViewerWrapper = styled.div<{ $isLoaded: boolean }>`
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: all 300ms ease;
  pointer-events: none;
  outline: none;
  outline-color: transparent;

  &:focus {
    outline: none;
    outline-color: transparent;
  }
`;

type THomeViewProps = {
  intro: string;
};

const HomeView = ({ intro }: THomeViewProps) => {
  const pathname = usePathname();

  const dm = useDarkMode(true);

  const [$isLoaded, set$isLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      set$isLoaded(true);
    }, 500);
  }, []);

  if (!window.navigator) return null;

  return (
    <motion.main
      animate="enter"
      exit="exit"
      initial="initial"
      key={pathname}
      variants={variants}
    >
      <SunMoon dm={dm || { value: false }} />

      <PaddedView>
        <Section>
          <FadeIn delay={300}>
            <ReactMarkdown
              components={{
                a(props) {
                  const { node, ...rest } = props;
                  return <a target="_blank" {...rest} />;
                },
              }}
            >
              {intro}
            </ReactMarkdown>
          </FadeIn>
        </Section>
      </PaddedView>

      <ModelViewerWrapper $isLoaded={$isLoaded}>
        {/* @ts-ignore */}
        <model-viewer
          tabIndex="-1"
          loading="lazy"
          src="/tree_palmDetailedShort.glb"
          shadow-intensity="0.5"
          min-camera-orbit="auto auto 2.5m"
          max-camera-orbit="auto auto 5m"
          camera-orbit="404.8deg 77.08deg 4.75m"
          field-of-view="45deg"
          exposure={dm.value ? '.25' : '0.55'}
          camera-target="0m 1.25m 0m"
          auto-rotate=""
          style={{
            position: 'fixed',
            bottom: '0',
            right: '-30vw',
            height: '100vw',
            width: '100%',
            zIndex: '-1',
            outline: 'none',
            pointerEvents: 'none',
            transform: 'translateX(0%)',
          }}
        />
      </ModelViewerWrapper>
    </motion.main>
  );
};

export default HomeView;
