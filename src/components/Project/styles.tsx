import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 75px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 0 200px;
  }
`;

export const Description = styled.div`
  margin: 0 0 40px;
`;

export const Image = styled.img`
  max-width: 100%;
`;
