import styled from 'styled-components';

type TBaseProps = {
  $maxWidth: number;
};

export const Base = styled.div<TBaseProps>`
  margin: ${({ theme }) => theme.spacing.none} auto;
  max-width: ${({ $maxWidth }) => `${$maxWidth}px`};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: ${({ theme }) => theme.spacing['5xl']}
      ${({ theme }) => theme.spacing.lg};
    text-align: left;
  }
`;
