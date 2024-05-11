import styled from 'styled-components';

export const Container = styled.div`
  border-top: 3px solid ${({ theme }) => theme.text.secondary};
  display: flex;
  flex-direction: column;
  margin: 0 0 60px;
  padding: 10px 0 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    height: 80vh;
    justify-content: space-between;
    margin: 0 0 60px;
    min-height: 400px;
    padding: 60px 0 0;
  }
`;

export const Description = styled.div`
  margin: 0 0 10px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 0 20px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: center;
  margin: 50px 0 20px;
  max-width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-basis: 45%;
    max-width: 50%;
    padding-right: 30px;
  }

  h2 {
    margin-top: 0;
  }

  [data-container='1'] & {
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 50%;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-items: center;
    border-left: 3px solid ${({ theme }) => theme.text.secondary};
    display: flex;
    padding: 0 0 0 40px;
    flex-basis: 55%;
  }
`;

export const ProjectNumber = styled.p`
  display: flex;
  line-height: 1;
  margin: 10px 0 10px;
  padding-left: 25px;
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
