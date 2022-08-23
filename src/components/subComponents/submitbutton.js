import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background:  ${(props) => (props.disabled ? "#c0c8d9" : "linear-gradient(170deg, #9e00d7, #f100b2)")};
  border-radius: 22px;
  color: white;
  padding: 0.8em 3em;
  border: none;
  margin: 10px;
  margin-top: 6em;
  font-size: 18px;
  &:hover{
    cursor:pointer;
  }
`;

const SubmitButton = ({ clickHandler,disabled }) => {
  return <Button onClick={() => clickHandler()} disabled={disabled}>Let's Go</Button>;
};

export default React.memo(SubmitButton);
