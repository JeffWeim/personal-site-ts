import styled from 'styled-components';

type TBaseProps = {
  $maxWidth: number;
};

export const Base = styled.div<TBaseProps>`
  margin: 0 auto;
  max-width: ${({ $maxWidth }) => `${$maxWidth}px`};
  padding: 10px 20px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 50px 20px;
    text-align: left;
  }
`;
