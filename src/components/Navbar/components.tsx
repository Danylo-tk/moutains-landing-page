import styled from "styled-components";

const Container = styled.nav`
  width: 90%;
  margin: auto;
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.ul`
  gap: 4rem;
  display: flex;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
`;

const AccountContainer = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`;

const Account = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: capitalize;
`;

export { Container, Menu, MenuItem, AccountContainer, Account };
