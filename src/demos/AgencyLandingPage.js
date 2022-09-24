import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import ImageGallery from 'react-image-gallery';
import { SectionHeading } from "components/misc/Headings.js";

// import countDown from "components/features/daisyCountDown.js"
import NYCVideos from "components/cards/ThreeColSlider.js"
import TrailerSection from "components/features/TrailerSection.js"
import Details from "components/hero/TwoColumnWithVideo.js"
import EventInfo from "components/features/TwoColWithButton.js"
// import Hero from "components/hero/BackgroundAsImage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";

import ContactUs from "components/pricing/ThreePlans.js";
import Eligibilities from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
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
  const Heading = tw(SectionHeading)`mt-4 font-black mb-10 text-center text-2xl sm:text-3xl lg:text-4xl text-center md:text-center leading-tight`;

  // const ImageGallery = tw`rounded-2xl`
  const images = [
    {
      original: 'https://1ngo.in/media/akanksha/82882867_2925243800853875_1050403263771312128_n.jpg',
      thumbnail: 'https://1ngo.in/media/akanksha/82882867_2925243800853875_1050403263771312128_n.jpg',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/37f62acb-902f-425f-b645-90d7f08bdee7.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/37f62acb-902f-425f-b645-90d7f08bdee7.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/56484573-3fe7-445a-8d9c-ae8442845c43.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/56484573-3fe7-445a-8d9c-ae8442845c43.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/37da203b-6c0e-4cae-ac84-87ba59611de7.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/37da203b-6c0e-4cae-ac84-87ba59611de7.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/7cc260b4-990a-4362-b523-b99082ced16f.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/7cc260b4-990a-4362-b523-b99082ced16f.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/057db088-489f-4357-b15a-213d0d60d9e2.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/057db088-489f-4357-b15a-213d0d60d9e2.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/209564ed-f0ef-451b-8d6e-c4623978c1b9.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/209564ed-f0ef-451b-8d6e-c4623978c1b9.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/a3ff75a1-e1bc-46f1-89bc-3706bb5c0e3d.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/a3ff75a1-e1bc-46f1-89bc-3706bb5c0e3d.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/d342adb7-c2ea-4e88-930a-9cc450d8f303.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/d342adb7-c2ea-4e88-930a-9cc450d8f303.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/f12cf34b-02e2-48c4-b6cb-a7a8884cd837.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/d293bf64acfc25961a414d77bfb92a3e5c771068/src/images/NYC%20pics/f12cf34b-02e2-48c4-b6cb-a7a8884cd837.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/fda33626-edf4-496c-9c86-39731dcd3095.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/fda33626-edf4-496c-9c86-39731dcd3095.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/d410899f-2ed6-42c3-ae5c-be3df342b53f.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/d410899f-2ed6-42c3-ae5c-be3df342b53f.JPG',
    },
    {
      original: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/d5da1b9e-07d9-42e3-abc2-90dc4c8694fc.JPG',
      thumbnail: 'https://raw.githubusercontent.com/SanjayKH-Git/NYC-2022-Akanksha/main/src/images/NYC%20pics/d5da1b9e-07d9-42e3-abc2-90dc4c8694fc.JPG',
    },
  ];

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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With 34% of India’s Gross National Income is contributed by the youth,
              there is a dire need for development. Advancement of youth leadership is critical in
              building civic capacity and long-term community sustainability to establish
              capable, effective leaders for the future generations.</p>
            <br></br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To achieve <b>Sustainable Development Goals (SDG)</b>, there are several factors
              which play major role. One among them is good governance. For the betterment of
              any goal, good governance is the foundation. Sustainable development, including
              sustained and economic growth, social development, environmental protection,
              educational development etc. are possible only when the quality of governance is
              good. By understanding the opportunities and responsibilities, youth can work
              towards the benefit of the society. So, SDG, youth and good governance must go
              hand in hand for the progress of any country.</p>
            <br></br>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Having realized this, <b>AKANKSHA CHARITABLE TRUST [ACT]</b> is organizing
              this momentous event – <strong>NATIONAL YOUTH CONFERENCE 2022</strong> gives an
              opportunity to all the delegates to work in a team on a problem listed under SDG.
              The unique solutions and different ideas can be expressed through real time SDG
              Hackathon. The <b>NYC-2022</b> is a platform to discuss, disseminate and deliberate on
              the possible plans, targets and solutions which must be generated and implemented
              by our youth in order to enhance their effective participation and role in nation
              building. The theme of the convention is <b>“ROLE OF YOUTH IN
              GOVERNANCE - FOCUS ON ACHIEVING SDGs BY 2030”</b>. With the
              inculcation of youth empowerment, the youth can reject the status quo and pave a
              path for a better future. Today the youth is claiming his right to decent living by
              willing to take risks which helps in the development of leadership skills. To build a
              better tomorrow, we need to nurture the saplings of today. Hence, a radical
              government which is pro-people comes from harnessing bright minds, capable of
              taking the nation into a brighter future.</p>

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
        heading={<>THEME: <HighlightedText>Role of Youth in Governance-Focus on Achieving SDGs by 2030</HighlightedText>, Mangalore</>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      {/* <TrailerSection /> */}
      <Eligibilities />
      <Speakers />
      <AboutUs />
      <Highlights />
      <NYCVideos />
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
      <FAQ id="faq"
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
      <ContactUs />
      <ContactUsForm />
      <Heading>NYC Moments ❤</Heading>
      <ImageGallery items={images} />
      <Footer />
    </AnimationRevealPage>
  );
}