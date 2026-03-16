'use client';

import React, { createContext, useContext } from 'react';
import type { DarkMode } from 'use-dark-mode';

const DarkModeContext = createContext<DarkMode | null>(null);

type TDarkModeProviderProps = {
  children: React.ReactNode;
  value: DarkMode;
};

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error(
      'useDarkModeContext must be used within a DarkModeProvider',
    );
  }

  return context;
};

export const DarkModeProvider = ({
  children,
  value,
}: TDarkModeProviderProps) => (
  <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
);
