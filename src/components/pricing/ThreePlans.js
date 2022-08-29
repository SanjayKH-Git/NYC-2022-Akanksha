import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as EmailLogo } from "feather-icons/dist/icons/mail.svg";
import { ReactComponent as PhoneLogo } from "feather-icons/dist/icons/phone.svg";


const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`self-center justify-center items-center`;
const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-indigo-800 bg-purple-100 flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
background: rgb(85,60,154);
background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
background: rgb(76,81,191);
background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`bg-primary-500 text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;


const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-4 py-2 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-sm font-bold text-left tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

const Email = styled.div`
  ${tw`flex flex-col leading-relaxed py-4`}
  
  .name {
    ${tw`font-bold text-xl`}
  }
  .email {
    ${tw`text-blue-400 inline-block`}
  }  
`;

const Phone = styled.div`
${tw`flex flex-col leading-relaxed py-4`}
  
.name {
  ${tw`font-bold text-2xl`}
}
.phone {
  ${tw`text-blue-400 inline-block`}
}  
`;

export default ({
  subheading = "Pricing",
  heading = "Contact Us",
  description = "",
  plans = null,
  primaryButtonText = "Buy Now"
}) => {
  const defaultPlans = [
    {
      name: "Personal",
      price: "$17.99",
      duration: "Monthly",
      mainFeature: "Contact Directly with Single click",
      features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"],
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(115deg, rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%);
    `,
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(115deg, #6415ff, #7431ff, #8244ff, #8e56ff, #9a66ff);
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
    `
  ];

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <Heading>{heading}</Heading>
          {/* {description && <Description>{description}</Description>} */}

          <PlansContainer>
            {plans.map((plan, index) => (
              <Plan key={index} featured={plan.featured}>
                {!plan.featured && <div className="planHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
                {/* <PlanHeader>
                <span className="name">{plan.name}</span>
                <span className="price">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </PlanHeader> */}
                <PlanFeatures>
                  <span className="feature mainFeature">{plan.mainFeature}</span>
                  {/* {plan.features.map((feature, index) => (
                    <span key={index} className="feature">
                      {feature}
                    </span>
                  ))} */}
                </PlanFeatures>
                <Email >
                  <a href="mailto: actputtur@gmail.com">
                    <EmailLogo class="email" />
                    <h4 class='name'>Email:</h4>
                    <p><strong>actputtur@gmail.com</strong></p>
                  </a>
                </Email>
                <Phone>
                  <a href="tel: 917411028512">
                    <PhoneLogo class="phone" />
                    <h4 class="name">Call:</h4>
                    <p><strong>+917411028512</strong></p>
                  </a>
                </Phone>
                {/* <PlanAction>
                <BuyNowButton css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton>
              </PlanAction> */}
              </Plan>
            ))}
            <DecoratorBlob />
          </PlansContainer>
        </HeaderContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
