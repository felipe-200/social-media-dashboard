import styled from "styled-components";

export const Main = styled.main`
  padding: 0 150px;  
  width: 100%;
  /* background-color:  ${props => props.theme.colors.bgPrimary}; */
  position: absolute;
  top: 100px;

  h2 {
    color: ${props => props.theme.colors.textSecondary};
    margin: 25px 0 15px 0;
  }

  @media only screen and (max-width: 1060px) {
    padding: 0 60px;
  }
  @media only screen and (max-width: 804px) {
    top: 150px;
    padding: 0 40px;
  }

  @media only screen and (max-width: 375px) {
    top: 150px;
    padding: 0 20px;
  }
`