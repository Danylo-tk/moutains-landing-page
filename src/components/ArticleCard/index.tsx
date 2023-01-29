import {
  Card,
  CardImg,
  Container,
  Heading,
  SubContainer,
  RedirectText,
  TextPreview,
  Line,
  SubHeading,
  TextContainer,
  ContentContainer,
  OverlayNumber,
} from "./components";
import { motion } from "framer-motion";
import palette from "../../styles/palette";

const contentVariants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
      duration: 1.5,
    },
  },
};

const imageVariants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
      duration: 1.5,
    },
  },
};

interface ArticleItems {
  number: string;
  subHeading: string;
  headingFirstPart: string;
  headingSecondPart: string;
  previewText: string;
  image: string;
}

const ArticleCard = ({
  number,
  subHeading,
  headingFirstPart,
  headingSecondPart,
  previewText,
  image,
}: ArticleItems) => {
  return (
    <Container>
      <Card>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={contentVariants}>
            <ContentContainer>
              <OverlayNumber>{number}</OverlayNumber>

              <SubContainer>
                <Line></Line>
                <SubHeading>{subHeading}</SubHeading>
              </SubContainer>

              <Heading>
                {headingFirstPart} <br /> {headingSecondPart}
              </Heading>

              <TextContainer>
                <TextPreview>{previewText}</TextPreview>
              </TextContainer>

              <SubContainer>
                <RedirectText>read more</RedirectText>
                <span
                  className="material-symbols-outlined"
                  style={{ color: palette.salomie }}
                >
                  arrow_forward
                </span>
              </SubContainer>
            </ContentContainer>
          </motion.div>
        </motion.div>
      </Card>

      <Card>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={imageVariants}>
            <CardImg src={image} alt="" />
          </motion.div>
        </motion.div>
      </Card>
    </Container>
  );
};

export default ArticleCard;
