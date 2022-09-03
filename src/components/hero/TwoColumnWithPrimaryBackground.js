import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';


import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "../headers/light.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "../../images/Logos/nyc_Logo.jpg";
import serverIllustrationImageSrc from "../../images/Logos/ACT_Logo_White.png";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-purple-900  shadow-inner rounded-br-32xl  text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-8 lg:mt-0 lg:ml-8`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-red-400 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 mb-16 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500 shadow-2xl`;
const Image = tw.img`w-144 ml-auto `;

const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Host = tw(SectionHeading)`max-w-3xl text-2xl text-yellow-400 lg:max-w-4xl lg:text-4xl lg:text-left md:text-left`;
const Presents = tw(SectionHeading)`max-w-3xl text-2xl p-4 text-blue-300 lg:max-w-2xl lg:px-32 md:text-left`;


export default ({
  heading = "NATIONAL YOUTH CONFERENCE 2022",
  description = "* Last Date to Apply:",
  primaryButtonText = "Apply Now",
  primaryButtonUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc0LwtYHm7Fl3NEgMGRcuRINRA9q6quRRRjW9jDY3UTxK7gPw/viewform?usp=sf_link",
  imageSrc = serverIllustrationImageSrc,
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      NYC-2022
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink target="_blank" href="https://akanksha.1ngo.in/">
        ACT Events
      </NavLink>
      {/* <NavLink href="/AboutUs">
        About Us
      </NavLink> */}
      <NavLink target="_blank" href="https://goyes.akankshatrust.in/">
       GOYES 2021
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc0LwtYHm7Fl3NEgMGRcuRINRA9q6quRRRjW9jDY3UTxK7gPw/viewform?usp=sf_link">
        Apply Now
      </PrimaryLink>
    </NavLinks>
  ];
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Header logoLink={logoLink} links={navLinks} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Host >
                  <span>Akanksha Charitable Trust(R.)</span>
                </Host>
                <Presents>Presents</Presents>
                <Heading>
                  <Typewriter                  
                    onInit={(typewriter) => {
                      typewriter.typeString("NATIONAL YOUTH CONFERENCE 2022")                       
                        .pauseFor(1000)
                        .deleteAll()
                      typewriter.typeString("TIME TO ACT!")
                        .pauseFor(1200)
                        .deleteAll()
                      typewriter.typeString("NATIONAL YOUTH CONFERENCE 2022")
                        .stop()
                        .start()
                    }}
                  />
                </Heading>
                <PrimaryButton as="a" rel="noreferrer" target="_blank" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
                <Description>{description} <span tw="text-indigo-200">31st October, 2022</span></Description>

              </TextColumn>
              
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
