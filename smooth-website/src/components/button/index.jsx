import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: 7px 15px;
  border-radius: 8px;
  background-color: ${theme.primary};
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  border: 2px solid transparent;
  transition: all 280ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary};
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
