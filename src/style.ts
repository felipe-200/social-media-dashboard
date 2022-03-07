import styled from "styled-components";

export const App = styled.div`
  max-width: 1440px;
  height: 100vh;
  background-color:  ${props => props.theme.colors.bgPrimary};
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 375px) {
    background-color: red;
  }
`