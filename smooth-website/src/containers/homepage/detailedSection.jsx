import React from "react";
import Element from "react-scroll/modules/components/Element";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import DetailedSectionImageUrl from "../../assets/illustrations/rocket_launch_.png";

const MoreDetailsContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsContainer = styled.div`
  display: flex;
`;

const DetailsText = styled.p`
font-size: 23px;
font-weight: normal;
line-height: 1.3;
color:#2f2f2f;
`;

// const DetailsImage

export function DetailedSection(props) {
  return (
    <MoreDetailsContainer>
      <SectionTitle>More About BSOR</SectionTitle>
    </MoreDetailsContainer>
  );
}
