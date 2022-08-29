import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

// import countDown from "components/features/daisyCountDown.js"
import TrailerSection from "components/features/TrailerSection.js"
import Details from "components/hero/TwoColumnWithVideo.js"
import EventInfo from "components/features/TwoColWithButton.js"
// import Hero from "components/hero/BackgroundAsImage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";

import Highlights from "components/features/DashedBorderSixFeatures";
import AboutUs from "components/features/TwoColSingleFeatureWithStats2.js";
import Objectives from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Speakers from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Hero />
      <Objectives />
      <EventInfo
        subheading={<Subheading>Description</Subheading>}
        heading={
          <>
           About this Event
            {/* <br /> <HighlightedText>NYC-2022.</HighlightedText> */}
          </>
        }
        description={
          <Description>
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India is a country teeming in youth with 70% of people below the age of 40 years. While 34% of India’s Gross National Income is contributed by the youth; there is a dire need to develop this percentage. In fact, the youth today is a major resource for not only development of financial prosperity but for social changes as well. The development of youth leadership is critical to building civic capacity and long term community sustainability. When youth develop such skills, we establish capable, effective leaders for the next generation.</p>
           <br></br>
   	       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Having realized this, "AKANKSHA CHARITABLE TRUST [ACT]" is organizing this momentous event – NATIONAL YOUTH CONFERENCE 2022. The NYC-2022 is a platform to discuss, disseminate and deliberate on the possible plans, targets and solutions which must be generated and implemented by our youth in order to enhance their effective participation and role in nation building. The theme of the convention is “YOUTH & GOOD GOVERNANCE”. With the inculcation of youth empowerment, the youth can reject the status quo and pave a path for a better future. Today the youth is claiming his right to decent living by willing to take risks which helps in the development of leadership skills. To build a better tomorrow, we need to nurture the saplings of today. Hence, a radical government which is pro-people comes from harnessing bright minds, capable of taking the nation into a brighter future.</p>
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          require("../images/Logos/NYC_Logo_Big.png")
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
       <Details
        heading={<>Location: <HighlightedText>Loyola Hall</HighlightedText>, Mangalore</>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc= "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      {/* <TrailerSection /> */}
      <Speakers />
      <AboutUs />
      <Highlights />
      {/* <Portfolio /> */}
      <Testimonial
        subheading="Testimonials"
        heading={
          <>
            Our Participant's <span tw="text-primary-500">Feedbacks</span>
          </>
        }
        description="These are some of the frequently asked inquiries we receive from past attendees about our events. Please use the contact form below if you have any additional queries.
"
        testimonials={[
          {
            imageSrc: require("../images/Testimonials/Feed/Deep_Kakkad_speech.JPG"),
            profileImageSrc: require("../images/Testimonials/Deep kakkad.jpg"),
            quote:
              "I was lucky to be a part of NYC 2020 as a speaker and a panelist. From tons of events I have attended and spoken at, NYC is my favorite. Not only is there immense value in terms of learning for the attendees, the team is just mind-blowingly friendly and helpful. Once you get familiar with the people behind NYC, they become like a family. I recommend everyone to attend NYC 2022 and get a great boost in the coming year and the future.",
            customerName: "Deep Kakkad",
            customerTitle: "NYC  Delegate, Gujarat"
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
           Frequently Asked <span tw="text-primary-500">Questions</span>
          </>
        }
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
}