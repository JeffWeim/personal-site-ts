'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import useDarkMode from 'use-dark-mode';

const DarkModeToggle = dynamic(() => import('@/components/DarkModeToggle'), {
  ssr: false,
});
const Link = dynamic(() => import('@/components/Link'), { ssr: false });

import {
  Button,
  ClickToClose,
  HeaderElement,
  Links,
  LinkText,
  Nav,
  NavInner,
} from './styles';

type THeaderProps = {
  resumeUrl: string;
};

const Header = ({ resumeUrl }: THeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const dm = useDarkMode(true);

  return (
    <>
      <HeaderElement>
        <Button onClick={() => (window.location.href = '/')}>
          {dm.value ? '🙂' : '😎'}
        </Button>{' '}
        <Button type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
          🕹
        </Button>
      </HeaderElement>
      <AnimatePresence>
        {isNavOpen && (
          <>
            <ClickToClose
              onClick={() => setIsNavOpen(!isNavOpen)}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            <Nav
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              initial={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <NavInner>
                <Links>
                  {/* <Link href='/about'>
                    <LinkText
                      onClick={() => setIsNavOpen(false)}
                      onKeyPress={e => (e.keyCode === 13 ? setIsNavOpen(false) : null)}
                    >
                      About
                    </LinkText>
                  </Link> */}

                  <Link external passHref href={resumeUrl}>
                    <LinkText
                      onClick={() => setIsNavOpen(false)}
                      onKeyPress={e =>
                        e.keyCode === 13 ? setIsNavOpen(false) : null
                      }
                    >
                      Resume
                    </LinkText>
                  </Link>
                </Links>

                <DarkModeToggle dm={dm} />
              </NavInner>
            </Nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
