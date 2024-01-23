import styled, { css } from 'styled-components';

type TAnchorElementProps = {
  $textDecoration: boolean;
  target?: string | null;
};

export const AnchorElement = styled.span<TAnchorElementProps>`
  border-bottom: none;
  cursor: pointer;

  ${({ $textDecoration, theme, target = null }) =>
    $textDecoration &&
    css`
      border-bottom: 1px solid ${theme.text.primary};
    `}
`;
