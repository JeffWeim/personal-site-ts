import type { ReactNode } from 'react';

import { Base } from './styles';

type TPaddedViewProps = {
  children: ReactNode;
  $maxWidth?: number;
};

const PaddedView = ({ children, $maxWidth = 1200 }: TPaddedViewProps) => {
  return <Base $maxWidth={$maxWidth}>{children}</Base>;
};

export default PaddedView;
