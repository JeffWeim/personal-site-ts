import styled from 'styled-components';

export const Container = styled.div`
  border-top: 3px solid ${({ theme }) => theme.text.secondary};
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing['6xl']};
  padding-top: ${({ theme }) => theme.spacing.sm};

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    height: 80vh;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing['6xl']};
    min-height: 400px;
    padding-top: ${({ theme }) => theme.spacing['6xl']};
  }
`;

export const Description = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing['5xl']}
    ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing.lg};
  max-width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-basis: 45%;
    max-width: 50%;
    padding-right: ${({ theme }) => theme.spacing['2xl']};
  }

  h2 {
    margin-top: ${({ theme }) => theme.spacing.none};
  }

  [data-container='1'] & {
    margin-top: ${({ theme }) => theme.spacing.none};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 605 / 350;
  width: 100%;
  flex-shrink: 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-items: center;
    border-left: 3px solid ${({ theme }) => theme.text.secondary};
    display: flex;
    width: calc(100% - 550px);

    img {
      padding-left: ${({ theme }) => theme.spacing['4xl']};
    }
  }
`;

export const ProjectNumber = styled.p`
  display: flex;
  line-height: 1;
  margin: ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.xl};
  position: relative;

  &:before {
    background-color: ${({ theme }) => theme.bg.green};
    content: '';
    height: 12px;
    left: 0px;
    position: absolute;
    top: 4px;
    width: 12px;
  }
`;
