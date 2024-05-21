import styled from 'styled-components';

export const ModelViewerWrapper = styled.div`
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
