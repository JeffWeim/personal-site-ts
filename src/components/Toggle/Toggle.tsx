import React from 'react';

import { Button, Label, Checkbox } from './styles';

type TToggleProps = {
  checked: boolean;
  onChange: () => void;
};

const Toggle = ({ checked, onChange }: TToggleProps) => {
  return (
    <>
      <Checkbox
        id="react-switch-new"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor="react-switch-new">
        <Button $isActive={checked} />
      </Label>
    </>
  );
};

export default Toggle;
