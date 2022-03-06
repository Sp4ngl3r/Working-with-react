import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";

const NavigationBarContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CompanyBrandContainer = styled.div``;

const AccessibilityContainer = styled.div``;

export function NavigationBar(props) {
  return (
    <NavigationBarContainer>
      <CompanyBrandContainer>
        <Logo inline />
      </CompanyBrandContainer>
      <AccessibilityContainer>
        <Button small>Get Started</Button>
      </AccessibilityContainer>
    </NavigationBarContainer>
  );
}
