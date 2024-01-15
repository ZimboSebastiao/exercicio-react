import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>

    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/classic">Classic Rock</NavLink>
      <NavLink to="/heavy">Heavy Metal</NavLink>
    </StyledMenu>
    </>
  );
}

const StyledMenu = styled.nav`
  height: 400px;
  width: 100%;
  display: flex;
  background-color: #g4678;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .active {
    background-color: black;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: transform 100ms;
  }
`;



export default Menu;
