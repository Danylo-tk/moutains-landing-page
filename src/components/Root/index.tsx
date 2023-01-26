import { useEffect, useState } from "react";
import GlobalStyle from "../../styles/GobalStyle";
import {
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
      <Wrapper />

      {/* setting up bg imgs and gradient overlays */}
      <UpperOverlayBG></UpperOverlayBG>
      <LowerOverlayBG></LowerOverlayBG>
      <FirstBG src={firstBG} alt="" />
      <SecondBG src={secondBG} alt="" />
      <ThirdBG src={thirdBG} alt="" positionY={scrollY} />
    </>
  );
};

export default Root;
