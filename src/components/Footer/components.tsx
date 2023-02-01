import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.footer`
  gap: 5%;
  display: grid;
  margin-bottom: 5rem;
  grid-template-columns: 55% 40%;
`;

const PromotionPart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpperPromotion = styled.div`
  gap: 3rem;
  display: flex;
  flex-direction: column;
`;

const LinksPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinksList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;

const ListItem = styled.li`
  font-size: 1.8rem;
  line-height: 3.5rem;
  font-weight: medium;
  text-transform: capitalize;
`;

const LinksHeader = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${palette.salomie};
`;

const Text = styled.p`
  font-size: 1.8rem;
`;

const CopyrightText = styled(Text)`
  opacity: 0.5;
`;

export {
  Container,
  PromotionPart,
  UpperPromotion,
  LinksPart,
  LinksList,
  ListItem,
  LinksHeader,
  Text,
  CopyrightText,
};
