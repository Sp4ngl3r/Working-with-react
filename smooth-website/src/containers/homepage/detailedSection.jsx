import React from "react";
import Element from "react-scroll/modules/components/Element";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import DetailedSectionImageUrl from "../../assets/logo/babu_sir.jpg";

const MoreDetailsContainer = styled(Element)`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60%;
`;

const DetailsText = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.4;
  color: #2f2f2f;
  text-align: justify;
`;

const DetailsImage = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;
`;

export function DetailedSection(props) {
  return (
    <MoreDetailsContainer>
      <SectionTitle>More About BSOR</SectionTitle>
      <DetailsContainer>
        <DetailsText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. {<br />}
          {<br />}Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </DetailsText>
        <DetailsImage src={DetailedSectionImageUrl} />
      </DetailsContainer>
    </MoreDetailsContainer>
  );
}
