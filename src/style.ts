import styled from "styled-components";

export const App = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  background-color:  ${props => props.theme.colors.bgPrimary};
  height: 100vh;

  @media only screen and (max-width: 840px) {
    height: calc(100vh + 360px);
  }
  @media only screen and (max-width: 375px) {
    height: calc(270vh);
  }
`