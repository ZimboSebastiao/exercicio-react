import styled from "styled-components";
import Menu from "./Menu";

function Header() {
  return (
    <StyledHeader>
      <h1>teste</h1>
      <Menu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #ccc015d5;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export default Header;
