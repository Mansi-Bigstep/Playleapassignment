import { useState } from "react";
import styled, { css } from "styled-components";
import ImageUpload from "./subComponents/imageUpload";
import Input from "./subComponents/input";
import SubmitButton from "./subComponents/submitbutton";

const FormContainer = styled.div`
  border: 2px solid #ce02a4;
  color: white;
  padding: 0.5em 0.5em;
  border-radius: 15px;
`;

const skillset = [
  { value: "Skill name", label: "Skill name" },
  { value: "VolleyBall", label: "VolleyBall" },
  { value: "BasketBall", label: "BasketBall" },
  { value: "Sample 3", label: "Sample 3" },
];

const competitorSet = [
  { value: "John", label: "John" },
  { value: "George", label: "George" },
  { value: "Charlie", label: "Charlie" },
  { value: "Steve", label: "Steve" },
];

const Form = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState("");
  const [competitor, setCompetitor] = useState("");
  const [hashtags, setHashTags] = useState([]);

  const clickHandler = () => {
    console.log(image,title, description, skill, competitor, hashtags);
  };
  return (
    <FormContainer>
      <ImageUpload setState={setImage} />
      <Input
        label="Dare Title"
        type="text"
        align="right"
        isMandatory={true}
        setState={setTitle}
      />
      <Input type="text" setState={setDescription} />
      <Input
        label="Skill"
        type="dropdown"
        dataset={skillset}
        setState={setSkill}
      />
      <Input
        label="Competitor"
        type="dropdown"
        dataset={competitorSet}
        setState={setCompetitor}
      />
      <Input type="multiselect" setState={setHashTags} />
      <SubmitButton clickHandler={clickHandler} disabled={title.length?false:true} />
    </FormContainer>
  );
};

export default Form;
