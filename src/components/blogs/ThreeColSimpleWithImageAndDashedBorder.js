import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/key.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-128 lg:h-128 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Speakers",
  heading = <> NYC - 2022 <span tw="text-primary-500">SPEAKERS🎙</span></>,
  description = "Decription? INTRO ",

}) => {
  const blogPosts = [
    {
      category: "Keynote Speaker",
      imageSrc:
        "https://www.ratnaprabha.in/wp-content/uploads/2021/01/1-hero-image.jpg",
      author: "Smt. K Ratna Prabha,",      
      designation: "IAS(Rtd)",
      title: "Former Chief Secretary, Govt. of Karnataka",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "#"
    },
    {
      category: "Speaker",
      imageSrc:
        "https://media-exp1.licdn.com/dms/image/C5603AQFpzMMuko_cpQ/profile-displayphoto-shrink_800_800/0/1607358753324?e=1666224000&v=beta&t=Nkks46zqCJl1adocMn7B5e6F-j_eCsV7FSZDFzpsgA4",
      author: "Sri Sudhir Narayana,",
      designation: "IDAS",
      title: "Controller(R&D) Ministry of Defense, Govt. of India",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "#"
    },
    {
      category: "Speaker",
      imageSrc:
        "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/09_05_2020_12_11_35_4220409.png?width=920&format=webp",
      author: "Ruchi Ghanashyam,",
      designation: "IFS(Rtd)",
      title: "Former High Commissioner to the United Kingdom",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "#"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          {/* <HeadingDescription>{description}</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <Meta>
                    <TagIcon />
                    <div><p tw="text-lg text-indigo-600 pb-3 text-center font-sans">{post.category}</p></div>
                  </Meta>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div><span tw="text-lg text-primary-500  font-sans hover:font-serif font-bold">{post.author}  <span tw="text-base text-purple-900">{post.designation}</span> </span></div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  {/* <Description>{post.description}</Description> 
                  <Link href={post.url}>Read More</Link>*/}
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
