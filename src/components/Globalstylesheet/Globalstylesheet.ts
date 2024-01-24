'use client';
import { createGlobalStyle } from 'styled-components';

export const Globalstylesheet = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme }) => theme.text.primary};
    fill: ${({ theme }) => theme.text.primary};
    font-family: 'raleway-regular', sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 15px;
    line-height: 1.5;
  }

  body {
    background-color: ${({ theme }) => theme.bg.primary};
  }

  ul {
    padding: 0;
    padding-left: 20px;
  }

  button {
    padding: 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights.body};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes[5]};

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
      font-size: ${({ theme }) => theme.fontSizes[7]};
    }

    a[href*="sureapp"] {
      background-color: #1c53e7;
      background-image: linear-gradient(45deg, #ffffff, #1c53e7);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      .light-mode & {
        background-image: linear-gradient(45deg, #dfdfdf, #1c53e7);

      }
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes[4]};

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
      font-size: ${({ theme }) => theme.fontSizes[6]};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes[3]};

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
      font-size: ${({ theme }) => theme.fontSizes[5]};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes[3]};

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    outline-style: dashed;
    outline-color: ${({ theme }) => theme.focus};
    outline-width: 1px;
  }


  model-viewer {
    #reveal {
      --poster-color: transparent;
    }

    .userInput {
      outline: none;
    }

    #reveal {
      --poster-color: transparent;
    }

    .slot {
      display: none;
    }
  }

  :root {
    --poster-color: transparent;
    --progress-bar-height: 0px;
  }

  *::selection {
    background: rgba(131, 194, 180, .4);
  }

  *::-moz-selection {
    background: rgba(131, 194, 180, .4);
  }
`;

export default Globalstylesheet;
