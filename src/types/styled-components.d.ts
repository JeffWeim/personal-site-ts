import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      primary: string;
      opposite: string;
      secondary: string;
      inset: string;
      input: string;
      header: string;
      green: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
      placeholder: string;
      onPrimary: string;
    };
    screen: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontSizes: string[];
    fontWeights: {
      body: number;
      subheading: number;
      link: number;
      bold: number;
      heading: number;
    };
    lineHeights: {
      body: number;
      heading: number;
      code: number;
    };
    colors: {
      focus: string;
    };
    spacing: {
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
      '7xl': string;
      '8xl': string;
    };
  }
}
