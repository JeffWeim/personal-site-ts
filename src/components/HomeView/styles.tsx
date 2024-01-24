import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;
  display: flex;
  height: calc(100vh - 200px);
  position: relative;
  z-index: 1;
`;

export const ModelViewerWrapper = styled.div<{ $isLoaded: boolean }>`
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  outline-color: transparent;
  outline: none;
  pointer-events: none;
  transition: all 300ms ease;
  z-index: 0;

  &:focus {
    outline: none;
    outline-color: transparent;
  }
`;
