'use client';
import { useState, useEffect } from 'react';

import { useDarkModeContext } from '@/context/DarkModeContext';

import { Sun, Moon } from './styles';

const SunMoon = () => {
  const [$moonActive, set$moonActive] = useState(false);
  const [$sunActive, set$sunActive] = useState(false);

  const dm = useDarkModeContext();

  useEffect(() => {
    setTimeout(() => {
      if (dm.value) {
        set$moonActive(true);
        set$sunActive(false);
      } else {
        set$sunActive(true);
        set$moonActive(false);
      }
    }, 500);

    return undefined;
  }, [dm.value]);

  return (
    <>
      <Moon $moonActive={$moonActive} />

      <Sun $sunActive={$sunActive} />
    </>
  );
};

export default SunMoon;
