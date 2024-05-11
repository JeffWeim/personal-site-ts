import styled from 'styled-components';

type TContainerProps = {
  $delay: number;
  $inView: boolean;
};

export const Container = styled.div<TContainerProps>`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) =>
    $inView ? 'translateY(0px)' : 'translateY(30px)'};
  transition: ${({ $delay }) => `all 400ms ease-out ${$delay}ms`};
`;
