import styled from 'styled-components'

interface IPropsOverViewCard {
  colorText: string
}

export const OverViewCard = styled.div<IPropsOverViewCard>`
  width: 100%;
  background: ${props => props.theme.colors.bgCard};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content:center ;
  align-items: center;
  padding: 10px 25px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    strong {
      color: ${props => props.theme.colors.textSecondary};
    }
    h2 {
      font-size: 25px;
      color: ${props => props.theme.colors.textPrimary};
      margin: 0;
    }
    small {
      font-weight: 900;
      color: ${props => props?.colorText}
    }
  }

`