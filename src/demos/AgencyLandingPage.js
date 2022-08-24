import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";


export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature2 />
    <Blog />
    <MainFeature />
    <Features />
    {/* <Portfolio /> */}
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Participant's <span tw="text-primary-500">Feedbacks</span>
        </>
      }
      description="Our beloved Participant's shared their Experiences from Previous NYC."
      testimonials={[
        {
          imageSrc: require("../images/Testimonials/Feed/Deep_Kakkad_speech.JPG"),
          profileImageSrc: require("../images/Testimonials/Deep kakkad.jpg"),
          quote:
            "I was lucky to be a part of NYC 2020 as a speaker and a panelist. From tons of events I have attended and spoken at, NYC is my favorite. Not only is there immense value in terms of learning for the attendees, the team is just mind-blowingly friendly and helpful. Once you get familiar with the people behind NYC, they become like a family. I recommend everyone to attend NYC 2022 and get a great boost in the coming year and the future.",
          customerName: "Deep Kakkad",
          customerTitle: "NYC  Delegate, Gujarath"
        },
        {
          imageSrc: require("../images/Testimonials/Feed/Dipu_Feed.JPG"),
          profileImageSrc: require("../images/Testimonials/Dipya.jpeg"),
          quote:
            "NYC 2020 has been a milestone in actualizing an endeavor of contributing my part to society and a life-changing experience. The verisimilitude and possibility of SDG hackathon inspired our project ”Threedhara”   and it became a reality. All glory to ACT.",
          customerName: "Dipyasuruj",
          customerTitle: "NYC Delegate, Assam "
        },
        {
          imageSrc: require("../images/Testimonials/Himanshi.png"),
          profileImageSrc: require("../images/Testimonials/Himanshi.png"),
          quote:
            "In an era of too many conferences with too little focus, National Youth Conference stands out as one of the few must-attend conferences. Speakers were top-notch, sessions were educational and entertaining with plenty of immediately applicable information, keynotes were fantastic. A great conference to inspire youth in building a better future. I feel really proud and happy to be part of this conference where I got to interact with so many different people and be inspired by each one of them.",
          customerName: "Himanshi Srivastav",
          customerTitle: " NYC Delegate, Uttar Pradesh"
        },
        {
          imageSrc: require("../images/Testimonials/Feed/DiscusFeed.JPG"),
          profileImageSrc: require("../images/Testimonials/Lakshayy.jpeg"),
          quote:
            "Being a part of the first edition of the National Youth Conference was a matter of privilege for me. I got the opportunity to be a part of the Panel Discussion as well which made it more exciting. I got to meet people from diverse backgrounds and could make great bonds with them which resulted in learning some great things. Above everything, the arrangements were very good and the enthusiasm of the entire organizing team was commendable along with the hospitality. Overall it was a wonderful experience and I will cherish the same throughout my life.",
            customerName: "Lakshy Chabrra",
            customerTitle: "NYC  Delegate, New Delhi"
        },
        
      ]}
      textOnLeft={true}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Most Common <span tw="text-primary-500">Questions</span>
        </>
      }
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
