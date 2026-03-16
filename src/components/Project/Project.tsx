import ReactMarkdown from 'react-markdown';

import FadeIn from '@/components/FadeIn/FadeIn';
import Link from '@/components/Link/Link';

import Image from 'next/image';

import {
  Container,
  Description,
  ImageContainer,
  ProjectNumber,
  TextContainer,
} from './styles';

type TImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type TProjectProps = {
  index: number;
  project: {
    description: string;
    name: string;
    link: string;
    images: TImage[];
  };
};

const Project = ({ project, index }: TProjectProps) => {
  return (
    <FadeIn>
      <Container data-container={index + 1}>
        <TextContainer>
          <ProjectNumber>project 0{index + 1}</ProjectNumber>
          <h2>{project.name}</h2>

          <Description>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </Description>
        </TextContainer>

        <ImageContainer>
          {project.images.map(image =>
            !!project.link ? (
              <Link
                external
                fillContainer
                passHref
                href={project.link}
                key={image.url}
              >
                <Image
                  src={image.url}
                  alt={image.alt || project.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            ) : (
              <Image
                key={image.url}
                src={image.url}
                alt={image.alt || project.name}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            ),
          )}
        </ImageContainer>
      </Container>
    </FadeIn>
  );
};

export default Project;
