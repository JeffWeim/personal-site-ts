import styled, { css } from 'styled-components';

type TButtonProps = {
  $isActive: boolean;
};

export const Button = styled.span<TButtonProps>`
  background: #fff;
  border-radius: 23px;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  content: '';
  height: 23px;
  left: 1px;
  position: absolute;
  top: 1px;
  transition: 0.2s;
  width: 23px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      left: calc(100% - 1px);
      transform: translateX(-100%);
    `}
`;

export const Label = styled.label`
  align-items: center;
  background: grey;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: space-between;
  position: relative;
  transition: background-color 0.2s;
  width: 50px;

  &:active {
    ${Button} {
      width: 30px;
    }
  }
`;

export const Checkbox = styled.input`
  height: 0;
  margin: 0;
  visibility: hidden;
  width: 0;
`;
