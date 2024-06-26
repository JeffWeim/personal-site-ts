'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useDarkMode from 'use-dark-mode';

import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';

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
  const router = useRouter();

  const dm = useDarkMode(true);

  return (
    <>
      <HeaderElement>
        <Button onClick={() => router.push('/')}>
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
                  <Link href="/portfolio">
                    <LinkText
                      onClick={() => setIsNavOpen(false)}
                      onKeyPress={e =>
                        e.keyCode === 13 ? setIsNavOpen(false) : null
                      }
                    >
                      Portfolio
                    </LinkText>
                  </Link>

                  <LinkText href={resumeUrl} target="_blank">
                    Resume
                  </LinkText>
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
