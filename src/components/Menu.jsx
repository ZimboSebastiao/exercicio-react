import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/classic">Classic Rock</NavLink>
      <NavLink to="/heavy">Heavy Metal</NavLink>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .active {
    background-color: black;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;
  }
`;

export default Menu;
