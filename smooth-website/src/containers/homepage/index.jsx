import React from "react";
import styled from "styled-components";
import { About } from "./about";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <About />
    </PageContainer>
  );
}
