import { useEffect, useState } from "react";
import GlobalStyle from "../../styles/GobalStyle";
import {
  ContentContainer,
  FirstBG,
  LowerOverlayBG,
  SecondBG,
  ThirdBG,
  UpperOverlayBG,
  Wrapper,
} from "./components";
import firstBG from "../../assets/1BG.png";
import secondBG from "../../assets/2BG.png";
import thirdBG from "../../assets/3BG.png";
import firstArticleImg from "../../assets/ArticleImg1.png";
import secondArticleImg from "../../assets/ArticleImg2.png";
import thirdArticleImg from "../../assets/ArticleImg3.png";
import Navbar from "../Navbar";
import MediaLinks from "../MediaLinks";
import HeroText from "../HeroText";
import ArticleCard from "../ArticleCard";
import ArticleCardInvert from "../ArticleCardInvert";
import Footer from "../Footer";
import SectionNavigation from "../SectionNavigation";

const Root = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  /* reading scroll position */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* applying global styling */}
      <GlobalStyle />
      <Wrapper>
        {/* setting up bg imgs and gradient overlays */}
        <UpperOverlayBG></UpperOverlayBG>
        <LowerOverlayBG></LowerOverlayBG>
        <FirstBG src={firstBG} alt="" />
        <SecondBG src={secondBG} alt="" />
        <ThirdBG
          src={thirdBG}
          alt=""
          style={{ top: `${-Math.abs(scrollY / 65) + 65}vh` }}
        />

        {/* adding hero page elements */}
        <Navbar />
        <MediaLinks />
        <HeroText />
        <SectionNavigation />

        {/* Main content */}
        <ContentContainer>
          <ArticleCard
            number="01"
            subHeading="get started"
            headingFirstPart="What level of hiker"
            headingSecondPart="are you?"
            previewText="Determining what level of hiker you are can be an 
            important tool when planning future hikes. This hiking level 
            guide will help you plan hikes according to different hike 
            ratings set by various websites like All Trails and Modern Hiker. 
            What type of hiker are you - novice, moderate, advanced moderate, 
            expert, or expert backpacker?"
            image={firstArticleImg}
          />
          <ArticleCardInvert
            number="02"
            subHeading="hiking essentials"
            headingFirstPart="Picking the right"
            headingSecondPart="hiking gear"
            previewText="The nice thing about beginning hiking is that you don't 
            really need any special gear, you can probably get away with things 
            you already have. Let's start with clothing. A typical mistake hiking 
            beginners make is wearing jeans and regular clothes, which will get 
            heavy and chafe wif they get sweaty or wet."
            image={secondArticleImg}
          />
          <ArticleCard
            number="03"
            subHeading="where you go is the sky"
            headingFirstPart="Understanding Your"
            headingSecondPart="map & timing"
            previewText="To start, print out the hiking guide and map. If it's 
            raining, throw them in a Zip-Lock bag. Read over the guide, study the 
            map, and have a good idea of what to expect. I like to know what my 
            next landmark is as I hike. For example, I'll read the guide and know 
            that say, in a mile, I make a right turn at the junction.."
            image={thirdArticleImg}
          />
          <Footer />
        </ContentContainer>
      </Wrapper>
    </>
  );
};

export default Root;
