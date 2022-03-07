import styled from "styled-components";

export const GridCards = styled.main`
  width:100% ;
  display: grid;
  justify-content:left;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  margin-bottom: 40px;  

  @media only screen and (max-width: 804px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`