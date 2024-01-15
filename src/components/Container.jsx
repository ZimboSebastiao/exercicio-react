import styled from "styled-components";

function Container({ children }) {
  return <StyledContaineir>{children}</StyledContaineir>;
}

const StyledContaineir = styled.main`
  width: 50vw;
  height: 400px;
  border: solid 10px black;
  display: flex;
  background-color: white;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
`;

export default Container;
