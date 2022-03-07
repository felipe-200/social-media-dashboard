import { GridCards } from "./style"

interface IProps {
  children: JSX.Element
}

const CGridCards = ({ children }: IProps) => {
  return (
    <GridCards>
      {children}
    </GridCards>
  )
}

export default CGridCards