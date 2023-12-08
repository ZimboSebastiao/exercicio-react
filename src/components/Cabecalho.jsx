import styled from "styled-components";
import Menu from "./Menu";

function Cabecalho() {
  return (
    <StyledCabecalho>
      <Menu />
    </StyledCabecalho>
  );
}

const StyledCabecalho = styled.header`
  background-color: #cea211d3;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export default Cabecalho;
