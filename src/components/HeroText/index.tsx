import {
  Container,
  Heading,
  Line,
  SubHeading,
  SubContainer,
  ScrollText,
  Wrapper,
} from "./components";

const HeroText = () => {
  return (
    <Container>
      <Wrapper>
        <SubContainer>
          <Line></Line>
          <SubHeading>a hiking guide</SubHeading>
        </SubContainer>
        <Heading>
          Be prepared for the <br /> Mountains and beyond!
        </Heading>
        <SubContainer>
          <ScrollText>scroll down</ScrollText>
          <span className="material-symbols-outlined">arrow_downward</span>
        </SubContainer>
      </Wrapper>
    </Container>
  );
};

export default HeroText;
