import React, { useState, useEffect, useRef } from 'react';
import type { DarkMode } from 'use-dark-mode';

import { Sun, Moon } from './styles';

type TSunMoonProps = {
  dm: DarkMode;
};

const SunMoon = ({ dm }: TSunMoonProps) => {
  const [$moonActive, set$moonActive] = useState(false);
  const [$sunActive, set$sunActive] = useState(false);

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
