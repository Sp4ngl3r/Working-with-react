import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #332d2d;
  position: relative;
`;

const FooterText = styled.h1`
  font-size: 25px;
  font-weight: 400;
  line-height: 1.2;
  color: #fff;
  margin: 0px;
`;

const FooterEndLine = styled.span`
  min-width: 100%;
  min-height: 2px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const CompanyDetailsContainer = styled.div`
  width: 90%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 11px;
  padding-right: 15px;
  padding-left: 15px;
  color: #fff;
  justify-content: space-between;
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 18px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;

  &:not(:last-of-type) {
    margin-right: 24px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReservedText = styled.div`
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 11px;
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="5em" />
      <Logo small />
      <Marginer direction="vertical" margin="3em" />
      <FooterText>Footer Text for</FooterText>
      <FooterText>Babu School of Rhythms</FooterText>
      <Marginer direction="vertical" margin="5em" />
      <Button>Contact Us</Button>
      <Marginer direction="vertical" margin="7em" />
      <CompanyDetailsContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms and Conditions</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
        </SocialContainer>
      </CompanyDetailsContainer>
      <RightsReservedText>
        &copy; 2022 - Babu School of Rhythms. All rights reserved.
      </RightsReservedText>
    </FooterContainer>
  );
}
