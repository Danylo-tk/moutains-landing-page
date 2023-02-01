import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
`;

const Heading = styled.h1`
  font-size: 8.8rem;
  text-transform: capitalize;
  font-family: "Bodoni Moda", serif;
`;

const SubContainer = styled.div`
  gap: 2.5rem;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  height: 0.2rem;
  width: 7rem;
  background-color: ${palette.salomie};
`;

const SubHeading = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 0.6rem;
  color: ${palette.salomie};
  text-transform: uppercase;
`;

const ScrollText = styled.p`
  font-size: 1.8rem;
`;

export {
  Container,
  Wrapper,
  Heading,
  Line,
  SubHeading,
  SubContainer,
  ScrollText,
};
