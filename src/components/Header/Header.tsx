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

                  <Links direction="row" padding="10px 0 20px">
                    <LinkText
                      href="http://github.com/jeffWeim/"
                      target="_blank"
                      style={{ padding: '0 15px 0 0 ' }}
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path
                          fill={dm.value ? 'black' : 'white'}
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                      </svg>
                    </LinkText>
                    <LinkText
                      href="http://linkedin.com/in/jweimer/"
                      target="_blank"
                      style={{ padding: '0 15px 0 0 ' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <title>Linkedin</title>
                        <path
                          d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                          fill-rule="evenodd"
                          fill={dm.value ? 'black' : 'white'}
                        ></path>
                      </svg>
                    </LinkText>
                  </Links>
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
