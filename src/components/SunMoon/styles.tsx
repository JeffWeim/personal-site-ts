import styled, { css, keyframes } from 'styled-components';

type TMoonProps = {
  $moonActive: boolean;
};

type TSunProps = {
  $sunActive: boolean;
};

export const sunAnimation = keyframes`
  0% { top: 30%; left: -8%; background-color:#f39f18; box-shadow: 0px 0px 52px 2px rgba(255,170,0,1); opacity: 1;}
  20% { top: 25%; left: 2%; background-color: #F3F9D2; box-shadow: 0px 0px 40px 18px rgba(245,233,95,1); opacity: 1;}
  40% { top: 20%; left: 12%; background-color:#F3F990; box-shadow: 0px 0px 35px 8px rgba(250,241,147,1); opacity: 1;}
  60% { top: 10%; left: 22%; background-color:#f39f18; box-shadow: 0px 0px 52px 14px rgba(245,233,95,1); opacity: 1;}
  80% { top: 0%; left: 32%; background-color:#f39f18; box-shadow: 0px 0px 0px 0px rgba(250,115,42,1); opacity: 1;}
  100% { top: -10%; left: 42%; background-color:#f39f18; box-shadow: 0px 0px 0px 2px rgba(255,170,0,1); opacity: .7;}

`;

export const moonAnimation = keyframes`
  0% { top: -10%; left: 42%; box-shadow: 0px 0px 20px 0px rgba(250,250,250,1); opacity: .7;}
  20% { top: 0%; left: 32%; box-shadow: 0px 0px 100px 18px rgba(250,250,250,1); opacity: 1;}
  40% { top: 10%; left: 22%; box-shadow: 0px 0px 30px 12px rgba(250,250,250,1); opacity: 1;}
  60% { top: 20%; left: 12%; box-shadow: 0px 0px 50px 5px rgba(250,250,250,1); opacity: 1;}
  80% { top: 25%; left: 2%;  box-shadow: 0px 0px 0px 0px rgba(250,250,250,1); opacity: 1;}
  100% { top: 30%; left: -8%; box-shadow: 0px 0px 0px 0px rgba(250,250,250,1); opacity: 1;}
`;

export const Sun = styled.div<TSunProps>`
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  background-color: #f39f18;
  border-radius: 50%;
  box-shadow: 0px 0px 52px 2px rgba(255, 170, 0, 1);
  height: 100px;
  left: -8%;
  opacity: 0;
  position: absolute;
  top: 30%;
  width: 100px;
  z-index: -1;

  ${({ $sunActive }) =>
    $sunActive &&
    css`
      animation-name: ${sunAnimation};
    `}
`;

export const Moon = styled.div<TMoonProps>`
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  background-color: #f4fefe;
  border-radius: 50%;
  box-shadow: 0px 0px 30px 0px rgba(250, 250, 250, 1);
  height: 100px;
  left: -8%;
  opacity: 0;
  position: absolute;
  top: 30%;
  width: 100px;
  z-index: -1;

  ${({ $moonActive }) =>
    $moonActive &&
    css`
      animation-name: ${moonAnimation};
    `}
`;
