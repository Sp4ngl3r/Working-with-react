import React from "react";
import styled from "styled-components";

import BackgroundImage from "../../assets/pictures/company_team.jpg";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { NavigationBar } from "../../components/navigationBar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImage});
  position: relative;
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

const DownArrowComponentContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
`;

export function TopSection(props) {
  return (
    <TopContainer>
      <BackgroundFilter>
        <NavigationBar />
        <Marginer direction="vertical" margin="11em" />
        <Logo />
        <Marginer direction="vertical" margin="2em" />
        <CaptionText>Short Description about the school</CaptionText>
        <CaptionText>in one or two lines</CaptionText>
        <Marginer direction="vertical" margin="5em" />
        <Button>Join us</Button>
        <DownArrowComponentContainer>
          <DownArrow />
        </DownArrowComponentContainer>
      </BackgroundFilter>
    </TopContainer>
  );
}
