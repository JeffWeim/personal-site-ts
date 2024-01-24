import { HR } from './styles';

export type TDividerProps = {
  spacing: {
    mobile: string;
    desktop: string;
  };
};

const Divider = ({ spacing }: TDividerProps) => {
  return <HR spacing={spacing} />;
};

export default Divider;
