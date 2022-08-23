import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  color: white;
  border: none; 
&:hover{
    cursor:pointer;
  }
`;

const ButtonIcon = styled.span`
  border: 2px solid white;
  border-radius: 50%;
  padding: 0.1em 0.1em;
  font-size: 20px;
`;

const BackButton = () => {
  return (
    <Button>
      <ButtonIcon className="material-symbols-outlined">
        keyboard_backspace
      </ButtonIcon>
    </Button>
  );
};

export default React.memo(BackButton);
