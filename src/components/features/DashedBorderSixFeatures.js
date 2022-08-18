import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-3xl`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 text-justify font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Acclaimed National level conference of Karnataka.",
      description: "Akanksha has marked its way by presenting the first-ever National Youth Conference of Karnataka in 2020. Akanksha aspires to bring together youth from various parts of the country to provide a platform and exposure in order to bring all the incredible ideas under the spotlight in order to build a well-established society. Online conference NYC 2021 with a prominent theme also flattered as a successful event."
    },
    { imageSrc: SupportIconImage,
      title: "Unconference",
      description: "The unique set of skills possessed by our enthusiastic participants were unleashed by empowering them to share theirs ideas and present theirs thoughts to everyone." },
    { imageSrc: CustomizeIconImage,
      title: "Theme",
      description: " Unique theme for each year helps in realizing various issues of our society. Team ACT focused on social concerning themes for NYC 2020 and NYC 2021."},
    { imageSrc: ReliableIconImage,
      title: "Panel Discussion",
      description: "A healthy panel discussion is what makes an event very intriguing. Experts from different fields added their perception and insights on different issues and needs of the society which led our participants to realize how youth can bring impactful changes by facing the challenges and help reconstruct the society in a better way."},
    { imageSrc: FastIconImage,
      title: "Eminent Speakers",
      description: "Some renowned speakers shared their excellence which simulated a ray of hope among the participants to believe and achieve. Their wisdom brought consciousness and strength among the delegates." },
    { imageSrc: SimpleIconImage, 
      title: "Ignite Talks",
      description: "Our delegate speakers shared their own life stories which caught the attention of the participants. Their ideal views and selflessness inspired everyone." },
    { imageSrc: SimpleIconImage, 
      title: "SDG Hackathon",
      description: "Bringing the real change is what matters to Akanksha. Delegates were divided into teams to present their solution oriented ideas on the given SDG . The presentations put forward by the top 10 selected teams were the real eyecatchers."},
    { imageSrc: SimpleIconImage, 
      title: "Fun Activities",
      description: " To boost up the energy and to improve communication among the delegates fun activities were introduced in between the different sessions. This helped the participants to have fun and make the conference memorable."},
      { imageSrc: SimpleIconImage, 
        title: "Impact of NYC 2020",
        description: "NYC 2020 has been one of the fruitful events where ‘Threedhara’ is a group of young minds working over ‘Gender equality ‘ was a result of SDG Hackathon held at NYC 2020 which gives us immense joy to witness the change we are seeking."},    
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Highlights of<span tw="text-primary-500 "> NYC-2020</span> & <span tw="text-primary-500 "> GoYes-2021</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description ">
                  {card.description || "Description."}
              </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
