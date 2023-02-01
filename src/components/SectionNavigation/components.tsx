import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
  top: 50vh;
  right: 2%;
  position: fixed;
`;

const SectionsList = styled.ul`
  list-style: none;
`;

const Section = styled.li`
  height: 6rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 1.8rem;
  font-weight: bold;
  border-right: 0.3rem solid grey;

  &:hover {
    color: ${palette.salomie};
  }
`;

export { Container, SectionsList, Section };
