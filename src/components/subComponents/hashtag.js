import React from "react";
import styled, { css } from "styled-components";

const Values = styled.div`
  border: 1px solid #9e00d7;
  margin: 0px 0px;
  padding: 3px;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  margin-right: 5px;
`;

const ClearIcon = styled.span`
  font-size: 18px;
  border: 1px solid #9e00d7;
  border-radius: 50%;
  margin: 0px 1px;
  margin-left:10px;
  color:#9e00d7;
  font-weight:600;
`;

const Hashtag = ({ multiValue, setMultiValue, item }) => {
  return (
    <Values>
      <div style={{fontSize:"14px"}}>{item}</div>
      <ClearIcon
        className="material-symbols-outlined"
        onClick={() => {
          const newArr = multiValue?.filter((i) => {
            return i != item;
          });
          setMultiValue(newArr);
        }}
      >
        close
      </ClearIcon>
    </Values>
  );
};

export default React.memo(Hashtag);
