import React from 'react';
import ReactMarkdown from 'react-markdown';

import FadeIn from '@/components/FadeIn';
import Link from '@/components/Link';

import { Container, Description, Image } from './styles';

type TImage = {
  url: string;
  alt: string;
};

type TProjectProps = {
  project: {
    description: string;
    name: string;
    link: string;
    images: TImage[];
  };
};

const Project = ({ project }: TProjectProps) => {
  return (
    <FadeIn>
      <Container>
        <Link external passHref href={project.link}>
          <h2>{project.name}</h2>

          <Description>
            {/* eslint-disable-next-line */}
            <ReactMarkdown children={project.description} />
          </Description>

          {project.images.map(image => (
            <Image
              key={image.url}
              src={image.url}
              alt={image.alt}
              // layout="intrinsic"
            />
          ))}
        </Link>
      </Container>
    </FadeIn>
  );
};

export default Project;
