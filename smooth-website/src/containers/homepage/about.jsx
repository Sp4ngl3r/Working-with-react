import React from "react";
import { Element } from "react-scroll/modules";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

const AboutContainer = styled(Element)`
  width: 100%;
  min-height: 1500px;
  display: flex;
  flex-direction: column;
`;

export function About(props) {
  return (
    <AboutContainer name="about">
      <SectionTitle>About Us</SectionTitle>
    </AboutContainer>
  );
}
