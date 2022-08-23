import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Hashtag from "./hashtag";

const Container = styled.div`
  border: 1px solid #9e00d7;
  color: white;
  padding: 0.5em 0.7em;
  border-radius: 28px;
  background-color: #2a0c54;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const InputContainer = styled.input`
  background-color: #2a0c54;
  border: none;
  color: white;
  width: 98%;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color: ${(props) => (props.value ? "gray" : "white")};
  font-size: 15px;
  margin-right: 10px;
  width: ${(props) => (props.align ? "70%" : "100px")};
  text-align: left;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(props) => (props.type == "dropdown" ? "100%" : "auto")};
`;

const Select = styled.select`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const InputSpan = styled.span`
  align-self: center;
  width: ${(props) => (props.type == "text" ? "100%" : "auto")};
`;

const Input = ({ label, type, dataset, align, setState, isMandatory }) => {
  const [value, setValue] = useState("");
  const [multiValue, setMultiValue] = useState([]);

  useEffect(() => {
    setState(multiValue);
  }, [multiValue]);

  const chnageHandler = (e) => {
    const str = e.target.value;
    if (type == "multiselect") {
      const lastStr = str.slice(-1);
      if (lastStr == " ") {
        const s = str.slice(0, -1);
        setValue("");
        if (s == "") return;
        setMultiValue((prevState) => {
          return [...prevState, s];
        });
      } else {
        setValue(str);
        setState(str);
      }
    } else {
      setValue(str);
      setState(str);
    }
  };

  return (
    <Container>
      {label && (
        <Label value={value} align={align}>
          {label}
          {isMandatory && "*"}
        </Label>
      )}
      <InputBox>
        {multiValue?.map((item) => {
          return (
            <Hashtag
              item={item}
              setMultiValue={setMultiValue}
              multiValue={multiValue}
            />
          );
        })}
        {type == "text" || type == "multiselect" ? (
          <InputSpan>
            <InputContainer
              type="text"
              value={value}
              onChange={(e) => {
                chnageHandler(e);
              }}
            />
          </InputSpan>
        ) : (
          <Select
            defaultValue={"select option"}
            onChange={(val) => {
              console.log(val.target.value);
              setValue(val.target.value);
              setState(val.target.value);
            }}
          >
            <option disabled value="select option" hidden></option>
            {dataset?.map((item) => {
              return <option value={item?.value}>{item?.label}</option>;
            })}
          </Select>
        )}
      </InputBox>
    </Container>
  );
};

export default React.memo(Input);
