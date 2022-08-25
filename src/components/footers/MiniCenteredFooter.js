import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/Logos/nyc_Logo.jpg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";


const Container = tw(ContainerBase)`bg-blue-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-16`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-4 font-medium tracking-wide text-lg text-gray-500`
const Credits = tw.p`text-center mt-10 font-medium tracking-wide text-lg text-gray-500`

const Planit = tw.a`text-green-400`
const ACT = tw.a`text-yellow-300`

export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>NYC-2022</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Higlights of NYC-2021 & GOYES 2021</Link>
            <Link href="#">FAQ</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright <br></br>
            <strong>
              <ACT>
                <a target="_blank" href="https://akanksha.1ngo.in/" tw="text-yellow-500">Akanksha Charitable Trust</a>
              </ACT>
            </strong>.<br></br> All Rights Reserved.                            
          </CopyrightText>
          <LogoContainer>
            <a target="_blank" href="https://akanksha.1ngo.in/">
              <LogoImg src={"https://goyes.akankshatrust.in/assets/img/BBG%20png.png"} />
            </a>
          </LogoContainer>
          <Credits>
          <strong> Designed & Developed by 
            <Planit><a target="_blank" href="https://planit4future.netlify.app/"><i>Plan<sub>i</sub></i>T</a></Planit>
          </strong>         
          </Credits>
          <LogoContainer>
            <a target="_blank" href="https://planit4future.netlify.app/">
              <LogoImg src={"https://planit4future.netlify.app/assets/img/favicon.png"} />
            </a>
          </LogoContainer>
        </Row>
      </Content>
    </Container>
  );
};
