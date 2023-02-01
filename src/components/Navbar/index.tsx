import {
  Account,
  AccountContainer,
  Container,
  Menu,
  MenuItem,
} from "./components";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="" />

      <Menu>
        <MenuItem>equipment</MenuItem>
        <MenuItem>about us</MenuItem>
        <MenuItem>blog</MenuItem>
      </Menu>

      <AccountContainer>
        <span className="material-symbols-outlined">account_circle</span>
        <Account>account</Account>
      </AccountContainer>
    </Container>
  );
};

export default Navbar;
