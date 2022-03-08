import styled from "styled-components";

export const App = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  background-color:  ${props => props.theme.colors.bgPrimary};
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    height: calc(100vh + 550px );
  }
  @media only screen and (max-width: 414px) {
    height: calc(100vh + 250px);
  }
  @media only screen and (max-width: 375px) {
    height: calc(100vh + 550px * 2.7);
  }
`