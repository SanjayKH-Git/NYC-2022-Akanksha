import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/design-illustration.svg";
import { ReactComponent as Date } from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as Location } from "feather-icons/dist/icons/navigation.svg";
import { ReactComponent as Time } from "feather-icons/dist/icons/clock.svg";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`shadow-2xl rounded-xl flex justify-center p-3 md:justify-center items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex  flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0 justify-center hover:bg-indigo-500`}
  svg {
    ${tw`w-10 h-10 text-primary-500`}
  }
`;
const Theme = tw.span`text-blue-600 bg-gray-300 text-xl font-bold px-12 border-4 rounded-full border-purple-700 p-8 inline-block shadow-2xl hover:p-2 delay-300`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 text-2xl px-4  p-4 transform  font-extrabold inline-block shadow-2xl rounded-full`;
const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-center `;
const FeatureHeading = tw.div`font-bold text-2xl text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-xl font-bold whitespace-pre-wrap`;


export default ({
  heading = "Modern React Templates, Just For You",
  description = "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText = "Get Started",
  primaryButtonUrl = "#",
  watchVideoButtonText = "Watch Video",
  watchVideoYoutubeUrl = "https://www.youtube.com/embed/_GuOjXYl5ew",
  imageSrc = DesignIllustration,
  imageCss = null,
  imageDecoratorBlob = false,
  features = null,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const defaultFeatures = [
    {
      Icon: Date,
      title: "Date",
      description: " December 10 & 11, 2022"
    },
    {
      Icon: Location,
      title: "Venue",
      description: "\t\t\t\tMangalore\t\t\t\t"
    },
    {
      Icon: Time,
      title: "Time",
      description: "\t9:30 AM-4:30 PM IST\t"
    }
  ];
  if (!features) features = defaultFeatures;

  return (
    <>
      {/* <Header /> */}
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Theme>THEME: <HighlightedText>YOUTH AND GOOD GOVERNANCE</HighlightedText></Theme>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>{<feature.Icon />}</FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <iframe tw="rounded-2xl shadow-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.4287265926696!2d74.8431238602065!3d12.873285165867784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4ed85da98b%3A0xf389c1a8da32dc4d!2sVRFV%2B8JP%20Loyola%20Hall%2C%20Hampankatta%2C%20Mangaluru%2C%20Karnataka%20575003!5e1!3m2!1sen!2sin!4v1661454880256!5m2!1sen!2sin"
                title="Loyola Hall" width="550" height="400" style={{ "border": "20px solid;", "border-radius": "20px;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </Container>
    </>
  );
};
