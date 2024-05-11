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
  margin: 20px 0 0;
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
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    display: block;
    margin: 0;
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
  margin: 0 0 50px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 0 100px;
  }
`;

export const Container = styled.div`
  [data-container='1'] {
    border-top: 3px solid ${({ theme }) => theme.text.secondary};
  }
`;
