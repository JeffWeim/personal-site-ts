import styled, { keyframes } from 'styled-components';

type TDownArrow = {
  $isVisible: boolean;
};

export const bounce = keyframes`
   0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  60% {
    transform: translateY(-15px);
  }
`;

export const DownArrow = styled.button<TDownArrow>`
  -webkit-appearance: none;
  animation: ${bounce} 2.25s 2;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.lg};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: all 300ms ease-in-out;

  @media screen and (min-height: 940px) {
    position: absolute;
    bottom: 30px;
  }
`;

export const DownIcon = styled.svg`
  width: 40px;
`;

export const Image = styled.img`
  border-radius: 50%;
  display: flex;
  margin: ${({ theme }) => theme.spacing.none} auto;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    display: block;
    margin: ${({ theme }) => theme.spacing.none};
  }
`;

export const Intro = styled.section`
  position: relative;
  height: 75vh;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    min-height: calc(100vh - 125px);
    height: auto;
  }
`;

export const ProjectsTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing['5xl']};

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin-bottom: 100px;
  }
`;

export const Container = styled.div`
  [data-container='1'] {
    border-top: 3px solid ${({ theme }) => theme.text.secondary};
  }
`;
