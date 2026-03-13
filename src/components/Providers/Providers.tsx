'use client';

import type { ReactNode } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/theme';

type TProviderProps = {
  children: ReactNode;
};

const Providers = ({ children }: TProviderProps) => {
  const dm = useDarkMode(true);

  const theme = dm.value ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
