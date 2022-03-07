import {Main} from './style'

interface IProps {
  children: JSX.Element
}

const CMain = ({ children }: IProps) => {
  return (
    <Main>
      {children}
    </Main>
  )
}

export default CMain