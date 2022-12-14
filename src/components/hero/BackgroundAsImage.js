import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Typewriter from 'typewriter-effect';

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";


const StyledHeader = styled(Header)`
  ${tw`pt-2 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://1ngo.in/media/akanksha/82882867_2925243800853875_1050403263771312128_n.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-2 pb-64 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-11/12 lg:w-4/5 mt-12 lg:mt-0 lg:pl-12 lg:pt-2`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-center sm:text-3xl lg:text-4xl xl:text-4xl font-black text-yellow-400 leading-none`}
  h4{
    ${tw`text-xl text-blue-400`}
  }
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 mx-4 py-4 hover:bg-purple-400 hover:p-12 hover: transition duration-300 delay-500 shadow `}
  &::before {    
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10 rounded-xl border-4 border-purple-900 justify-center text-3xl`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 lg:mt-64 xl:mt-64 text-xl sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-yellow-500 text-primary-500  font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-yellow-700 focus:shadow-outline `;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="">
        About Event
      </NavLink>
      <NavLink href="MainFeature">
        ACT Events
      </NavLink>
      <NavLink href="#">
        About Us
      </NavLink>
      <NavLink href="#">
        NYC Highlights
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc0LwtYHm7Fl3NEgMGRcuRINRA9q6quRRRjW9jDY3UTxK7gPw/viewform?usp=sf_link">
        Apply Now
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>We are Launching Exclusive Event of 2022.</Notification>
            <Heading >
              <span>Akanksha Charitable Trust(R.)</span>

              <h4 style={{ "text-align": "auto", color: "rgb(0, 187, 255);", "padding": "10px" }}> Presents </h4>

              <SlantedBackground >
                {/* <Typewriter
                  options={{
                    strings: ['NATIONAL YOUTH CONFERENCE 2022', 'TIME TO ACT!', 'Are You Ready?', 'NATIONAL YOUTH CONFERENCE 2022'],
                    autoStart: true,
                    loop: true,
                    stop(){}
                  }}
                /> */}

                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("NATIONAL YOUTH CONFERENCE 2022")
                      .pauseFor(800)
                      .deleteAll()
                    typewriter.typeString("TIME TO ACT!")
                      .pauseFor(800)
                      .deleteAll()
                    typewriter.typeString("NATIONAL YOUTH CONFERENCE 2022")
                      .stop()
                      .start()
                  }}
                />
              </SlantedBackground>
            </Heading>
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc0LwtYHm7Fl3NEgMGRcuRINRA9q6quRRRjW9jDY3UTxK7gPw/viewform?usp=sf_link">
              <PrimaryAction>Apply Now</PrimaryAction>
            </a>
          </LeftColumn>
          {/* <RightColumn>
            <StyledResponsiveVideoEmbed              
              url = "https://www.youtube.com/embed/RM6hGUNgqvI?controls=0&amp;start=2"
              background="transparent"
            />            
          
          </RightColumn> */}
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
