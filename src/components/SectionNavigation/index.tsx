import { Container, Section, SectionsList } from "./components";

const SectionNavigation = () => {
  return (
    <Container>
      <SectionsList>
        <Section>Start</Section>
        <Section /* style={{ borderRight: "0.3rem solid white" }} */>
          01
        </Section>
        <Section>02</Section>
        <Section>03</Section>
      </SectionsList>
    </Container>
  );
};

export default SectionNavigation;
