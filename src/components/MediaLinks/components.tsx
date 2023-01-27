import styled from "styled-components";

const Container = styled.div`
  top: 50vh;
  left: 5%;
  gap: 3rem;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.8rem;
  writing-mode: vertical-lr;
  text-transform: capitalize;
`;

export { Container, Text };
