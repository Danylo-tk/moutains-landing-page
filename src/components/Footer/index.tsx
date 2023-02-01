import {
  Container,
  CopyrightText,
  LinksHeader,
  LinksList,
  LinksPart,
  ListItem,
  PromotionPart,
  Text,
  UpperPromotion,
} from "./components";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <Container>
      <PromotionPart>
        <UpperPromotion>
          <div>
            <img src={logo} alt="" />
          </div>
          <Text>
            Get out there & discover your next <br /> slope, mountain &
            destination!
          </Text>
        </UpperPromotion>
        <CopyrightText>Copyright 2019 MNTN, Inc. Terms & Privacy</CopyrightText>
      </PromotionPart>

      <LinksPart>
        <div>
          <LinksHeader>More on the blog</LinksHeader>
          <LinksList>
            <ListItem>about MNTN</ListItem>
            <ListItem>contributors & Writers</ListItem>
            <ListItem>Write for us</ListItem>
            <ListItem>contact us</ListItem>
            <ListItem>privacy policy</ListItem>
          </LinksList>
        </div>
        <div>
          <LinksHeader>More on MNTN</LinksHeader>
          <LinksList>
            <ListItem>The team</ListItem>
            <ListItem>jobs</ListItem>
            <ListItem>press</ListItem>
          </LinksList>
        </div>
      </LinksPart>
    </Container>
  );
};

export default Footer;
