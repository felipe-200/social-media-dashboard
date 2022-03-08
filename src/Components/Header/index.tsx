import { useContext } from "react"

import { Header, ContentHeader } from "./style"
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

interface IProps {
  toggleTheme: () => void
}

const CHeader = ({ toggleTheme }: IProps) => {

  const { colors, title } = useContext(ThemeContext)

  return (
    <Header> 
      <ContentHeader>
        <section>
          <h2> Social Media Dashboard </h2> 
          <strong>Total Followers: 23,004</strong> 
        </section>  

        <section>
          <strong>{`${title} Mode`}</strong> 
          <Switch
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={15}
            offColor={colors.switch}
            onColor={'#888'}
          />

        </section>
      </ContentHeader>
    </Header>
  )
}

export default CHeader