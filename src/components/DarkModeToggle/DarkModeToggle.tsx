import React from 'react';
import type { DarkMode } from 'use-dark-mode';

import Toggle from '@/components/Toggle/Toggle';

import { Button, Container } from './styles';

type TDarkModeToggleProps = {
  dm: DarkMode;
};

const DarkModeToggle = ({ dm }: TDarkModeToggleProps) => {
  return (
    <Container>
      <Button type="button" onClick={dm.disable}>
        ☀
      </Button>
      <Toggle checked={dm.value} onChange={dm.toggle} />
      <Button type="button" onClick={dm.enable}>
        ☾
      </Button>
    </Container>
  );
};

export default DarkModeToggle;
