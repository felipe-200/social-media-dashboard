import styled from 'styled-components'

interface ICard {
  colorText: string;
  colorBorder: string;
}

export const Card = styled.div<ICard>`
  position: relative;
  width: 100%;
  background: ${props => props.theme.colors.bgCard};
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &::before{
    content: '';
    height: 4px;
    width: 100%;
    top: 0;
    left:0 ;
    position: absolute;
    background: ${props => props?.colorBorder};
    border-radius: 3px 3px 0 0;
  }

  figure {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    figcaption {
      font-weight: 900;
      color: ${props => props.theme.colors.textSecondary};
    }
    &:last-child {
      gap: 5px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0; 
    h1 {
      line-height: 60px;
      font-size: 60px;
      color: ${props => props.theme.colors.textPrimary}
    }
    strong {
      /* font-weight: 800; */
      letter-spacing: 5px;
      color: ${props => props.theme.colors.textSecondary}
    }
  }

  small {
    margin-top: 10px;
    font-weight: 900;
    color: ${props => props?.colorText}
  }

`