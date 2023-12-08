import styled from "styled-components";

function Container({ children }) {
  return <StyledContaineir>{children}</StyledContaineir>;
}

const StyledContaineir = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: #afafd4 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }
`;

export default Container;
