'use client';

import type { ReactNode } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';

import { DarkModeProvider } from '@/context/DarkModeContext';
import { darkTheme, lightTheme } from '@/theme';

type TProviderProps = {
  children: ReactNode;
};

const Providers = ({ children }: TProviderProps) => {
  const dm = useDarkMode(true);

  const theme = dm.value ? darkTheme : lightTheme;

  return (
    <DarkModeProvider value={dm}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeProvider>
  );
};

export default Providers;
