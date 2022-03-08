import { useState } from 'react'
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyleComponent from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';


import { App } from './style'
import Header from './Components/Header'
import Card from './Components/Cards';
import GridCards from './Components/GridCards'
import Main from './Components/Main'
import OverViewCard from './Components/OverviewCard';


function CApp() {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme?.title === 'dark' ? light : dark)
  }


  return (
    <ThemeProvider theme={theme}>
      <App>
      <GlobalStyleComponent />
        <Header toggleTheme={toggleTheme} />
        <Main>
          <div>
            <GridCards>
              <>
                <Card />
                <Card />
                <Card />
                <Card />
              </>
            </GridCards>
            <h2>Overview - Today</h2>
            
            <GridCards>
              <>
                <OverViewCard />
                <OverViewCard />
                <OverViewCard />
                <OverViewCard />
                <OverViewCard />
                <OverViewCard />
                <OverViewCard />
                <OverViewCard />
              </>  
            </GridCards>
          </div>
        </Main>
      </App>
    </ThemeProvider>
    
  )
}

export default CApp
