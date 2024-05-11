import styled from 'styled-components';

import type { TDividerProps } from './Divider';

export const HR = styled.hr<TDividerProps>`
  background-color: ${({ theme }) => theme.text.secondary};
  border: none;
  height: 3px;
  margin: ${({ spacing }) => spacing.mobile};
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: ${({ spacing }) => spacing.desktop};
  }
`;
