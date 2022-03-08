import styled from "styled-components";

export const Main = styled.main`
  padding: 0 150px;  
  width: 100%;
  /* background-color:  ${props => props.theme.colors.bgPrimary}; */
  position: absolute;
  top: 110px;

  h2 {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 20px;
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