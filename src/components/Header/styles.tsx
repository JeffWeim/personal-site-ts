import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled.button`
  -webkit-appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  position: relative;
  z-index: 99;
`;

export const ClickToClose = styled(motion.div)`
  background-color: #000;
  cursor: pointer;
  height: calc(100% + 15px);
  left: 0;
  position: fixed;
  top: -15px;
  width: 100%;
  z-index: 5;
`;

export const HeaderElement = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  transition: all 300ms ease-in;
  z-index: 99;

  &:after {
    content: '';
    filter: blur(20px);
    -webkit-filter: blur(20px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 72.5px;
    background: #3b3b3ba6;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    &:after {
      content: none;
    }
  }
`;

export const Links = styled.span`
  display: flex;
  flex-direction: column;
`;

export const LinkText = styled.a`
  display: block;
  padding: ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.none};

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.none};
  }
`;

export const Nav = styled(motion.nav)`
  background-color: ${({ theme }) => theme.bg.opposite};
  color: ${({ theme }) => theme.text.onPrimary};
  height: 100%;
  max-width: 300px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  max-height: 100vh;
  padding: ${({ theme }) => theme.spacing['8xl']}
    ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
`;
