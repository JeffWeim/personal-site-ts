import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  position: relative;
  z-index: 99;
`;

export const ClickToClose = styled(motion.div)`
  background-color: #000;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

export const HeaderElement = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  transition: all 300ms ease-in;
  z-index: 99;
`;

export const Links = styled.span`
  display: flex;
  flex-direction: column;
`;

export const LinkText = styled.a`
  padding: 15px 0;
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 10px 0;
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
  z-index: 11;
`;

export const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 80px 20px 20px;
  justify-content: space-between;
  max-height: 100vh;
`;
