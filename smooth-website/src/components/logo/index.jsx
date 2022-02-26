import React from "react";
import styled from "styled-components";

import BeemaLogo from "../../assets/logo/logo_croped.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 8em;
  height: 8em;
`;

const LogoText = styled.div`
  margin-top: 16px;
  font-size: 50px;
  color: ${theme.primary};
  font-weight: 800;
`;

export function Logo(props) {
  return (
    <LogoContainer>
      <LogoImage src={BeemaLogo} />
      <LogoText>Babu School of Rhythms</LogoText>
    </LogoContainer>
  );
}
