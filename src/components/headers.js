import React from "react";
import styled, { css } from "styled-components";
import BackButton from "./subComponents/backButton";

const Title = styled.p`
  color: white;
  text-align:center;
  width:90%;
  font-size:20px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  margin:0em
`;

const Header = () => {
  return (
    <Head>
      <BackButton />
      <Title>Create Dare</Title>
    </Head>
  );
};

export default React.memo(Header);
