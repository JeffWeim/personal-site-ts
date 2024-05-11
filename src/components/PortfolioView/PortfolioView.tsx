'use client';
import React, { useRef } from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import FadeIn from '@/components/FadeIn';
import PaddedView from '@/components/PaddedView';
import Project from '@/components/Project';

import type { TProjectProps } from '@/components/Project';

import { Container, Intro } from './styles';

type TPortfolioViewProps = {
  portfolioPage: any;
};

const PortfolioView = ({ portfolioPage }: TPortfolioViewProps) => {
  const { text, skills, projects } = portfolioPage;
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <Container>
      <Head>
        <title>Jeff Weimer | Portfolio</title>
      </Head>

      <PaddedView>
        <Intro>
          <FadeIn $delay={200}>
            <ReactMarkdown>{text}</ReactMarkdown>
          </FadeIn>

          {skills && (
            <FadeIn $delay={400}>
              <ReactMarkdown>{skills}</ReactMarkdown>
            </FadeIn>
          )}
        </Intro>

        {projects && (
          <section ref={projectsRef}>
            {projects.map(
              (project: TProjectProps['project'], index: number) => (
                <Project index={index} key={project.name} project={project} />
              ),
            )}
          </section>
        )}
      </PaddedView>
    </Container>
  );
};

export default PortfolioView;
