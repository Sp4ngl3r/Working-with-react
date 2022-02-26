import React from "react";
import styled from "styled-components";

import BackgroundImage from "../../assets/pictures/company_team.jpg";
import { Button } from "../../components/button";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImage});
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CaptionText = styled.h1`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  margin: 0px;
`;

export function TopSection(props) {
  return (
    <TopContainer>
      <BackgroundFilter>
        <Marginer direction="vertical" margin="11em" />
        <Logo />
        <Marginer direction="vertical" margin="2em" />
        <CaptionText>Short Description about the school</CaptionText>
        <CaptionText>in one or two lines</CaptionText>
        <Marginer direction="vertical" margin="5em" />
        <Button>Join our class</Button>
      </BackgroundFilter>
    </TopContainer>
  );
}
