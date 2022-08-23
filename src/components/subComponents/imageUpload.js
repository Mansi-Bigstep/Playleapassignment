import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

const ImageText = styled.h1`
  color: #b0a4cc;
  text-align: left;
  font-size: 14px;
`;

const Image = styled.img`
  height: 250px;
  width: 150px;
  object-fit: contain;
  background-color: white;
  border-radius: 20px;
`;

const UploadContainer = styled.div`
  height: 250px;
  width: 350px;
  background-size: cover;
  border-radius: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UploadContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

const UploadText = styled.div`
  align-self: flex-end;
  text-align: left;
  margin-left: 10px;
`;

const IconContainer = styled.span`
  font-size: 20px;
`;

const getSrcFromFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      resolve(e.target.result);
    };
    reader.readAsDataURL(file);
  });
};

const ImageUpload = ({setState}) => {
  const [image, setImage] = useState("");
  return (
    <Container>
      {image ? (
        <Image src={image}></Image>
      ) : (
        <UploadContainer>
          <label>
            <UploadContent>
              <IconContainer className="material-symbols-outlined">
                add_a_photo
              </IconContainer>
            </UploadContent>
            Cover
            <input
              style={{ display: "none" }}
              type="file"
              onChange={async (e) => {
                const src = await getSrcFromFile(e.target.files[0]);
                setImage(src);
                setState(e.target.files[0].name)
                console.log(e.target.files[0]);
              }}
            ></input>
          </label>
        </UploadContainer>
      )}
      <UploadText>
        <IconContainer className="material-symbols-outlined">
          info
        </IconContainer>
        <ImageText>
          You can select a frame from a video or an image from gallery
        </ImageText>
      </UploadText>
    </Container>
  );
};

export default React.memo(ImageUpload);
