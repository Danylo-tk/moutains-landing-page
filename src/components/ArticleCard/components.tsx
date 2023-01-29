import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  gap: 5%;
  display: grid;
  grid-template-columns: 55% 40%;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 6.4rem;
  font-family: "Bodoni Moda", serif;
`;

const TextPreview = styled.p`
  font-size: 1.8rem;
`;

const TextContainer = styled.div`
  width: 90%;
`;

const SubContainer = styled.div`
  gap: 2.5rem;
  display: flex;
  align-items: center;
`;

const RedirectText = styled.p`
  font-size: 1.8rem;
  color: ${palette.salomie};
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

const OverlayNumber = styled.p`
  margin: -12rem 0 0 -12rem;
  opacity: 0.1;
  position: absolute;
  font-size: 24rem;
  font-weight: bold;
`;

export {
  Container,
  Card,
  CardImg,
  Heading,
  TextPreview,
  TextContainer,
  SubContainer,
  RedirectText,
  Line,
  SubHeading,
  ContentContainer,
  OverlayNumber,
};
