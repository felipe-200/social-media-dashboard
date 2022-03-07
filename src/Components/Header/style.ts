import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${props => props.theme.colors.bgSecondary};
  height: 180px;
  padding: 30px 150px 0 150px;

  

  @media only screen and (max-width: 1060px) {
    padding: 60px;
  }
  @media only screen and (max-width: 840px) {
    padding: 40px;
  }
  @media only screen and (max-width: 375px) {
    padding: 20px;
  }
 
`

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  


  section {
    width:100% ;
    margin-bottom: 30px;

    h2 {
      font-weight: 700;
      color: ${props => props.theme.colors.textPrimary};
    }
    
    strong {
      color: ${props => props.theme.colors.textSecondary};
      text-transform: capitalize;
    }

    &:last-child {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: flex-end;
    }
  } 


  @media only screen and (max-width: 375px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start ;

    section {
      margin-bottom: 20px;
    }

    section:first-child::after {
      content: '';
      display: block ;
      height: 1px;
      border-bottom: 0.5px solid ${props => props.theme.colors.textSecondary};
      width: 100%;
      margin-top: 20px;
    }
    section:last-child {
      justify-content: space-between;
    }

  }


`