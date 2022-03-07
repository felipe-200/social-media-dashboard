import styled from "styled-components";

export const Main = styled.main`
  /* height: 100vh; */
  position: absolute;
  top: 110px;
  padding: 0 150px;
  width:100% ;


  h2 {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1060px) {
    padding: 60px;
    top: 70px;
  }
  @media only screen and (max-width: 375px) {
    padding: 20px;
    top: 140px;
  }
`