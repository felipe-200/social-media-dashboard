import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';

import GlobalStyleComponent from './styles/global'
import light from './styles/themes/light';
import dark from './styles/themes/dark';


import { App } from './style'
import Header from './Components/Header'
import Card from './Components/Cards'
import GridCards from './Components/GridCards'
import Main from './Components/Main'
import OverViewCard from './Components/OverviewCard'

import iconFace from './assets/images/icon-facebook.svg'
import iconTwitter from './assets/images/icon-twitter.svg'
import iconInsta from './assets/images/icon-instagram.svg'
import iconYT from './assets/images/icon-youtube.svg'


function CApp() {
  const storageTheme = JSON.parse(localStorage.getItem('theme')!);
  const [theme, setTheme] = useState(storageTheme);
  const toggleTheme = () => {
    setTheme(theme?.title === 'dark' ? light : dark)
  }
  
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const cards = {
    cards: [
      {
        icon: iconFace, 
        profile:"@user1",
        numberFollows: "1987",
        countDays: "12 Today",
        colorTextToday: "hsl(163, 72%, 41%)",
        arrow: 'up',
      },
      {
        icon: iconTwitter, 
        profile:"@user2",
        numberFollows: "1044",
        countDays: "99 Today",
        colorTextToday: "hsl(163, 72%, 41%)",
        arrow: 'up',
      },
      {
        icon: iconInsta, 
        profile:"@user3",
        numberFollows: "11K",
        countDays: "1099 Today",
        colorTextToday: "hsl(163, 72%, 41%)",
        arrow: 'up',
      },
      {
        icon: iconYT, 
        profile:"@user4",
        numberFollows: "8239",
        countDays: "144 Today",
        colorTextToday: "hsl(356, 69%, 56%)",
        arrow: 'down',
      }
    ],
    overview: [
      {
        title: 'Page Views',
        icon: iconFace,
        number: "87",
        percents: "3%",
        colorText: "hsl(163, 72%, 41%)",
        arrow: "up"
      },
      {
        title: 'Likes',
        icon: iconFace,
        number: "52",
        percents: "2%",
        colorText: "hsl(356, 69%, 56%)",
        arrow: "down"
      },
      {
        title: 'Likes',
        icon: iconInsta,
        number: "5462",
        percents: "2257%",
        colorText: "hsl(163, 72%, 41%)",
        arrow: "up"
      },
      {
        title: 'Profile Views',
        icon: iconInsta,
        number: "52k",
        percents: "1375%",
        colorText: "hsl(163, 72%, 41%)",
        arrow: "up"
      },
      {
        title: 'Retweets',
        icon: iconTwitter,
        number: "117",
        percents: "303%",
        colorText: "hsl(163, 72%, 41%)",
        arrow: "up"
      },
      {
        title: 'Likes',
        icon: iconTwitter,
        number: "507",
        percents: "553%",
        colorText: "hsl(163, 72%, 41%)",
        arrow: "up"
      },
      {
        title: 'Likes',
        icon: iconYT,
        number: "107",
        percents: "19%",
        colorText: "hsl(356, 69%, 56%)",
        arrow: "down"
      },
      {
        title: 'Total Views',
        icon: iconYT,
        number: "1407",
        percents: "12%",
        colorText: "hsl(356, 69%, 56%)",
        arrow: "down"
      }
    ]
  }

  return (
    <ThemeProvider theme={theme}>
      <App>
      <GlobalStyleComponent />
        <Header toggleTheme={toggleTheme} />
        <Main>
          <>
            <GridCards>
              <>
                {
                  cards.cards?.map((value) => (
                    <Card 
                      icon={value.icon}
                      profile={value.profile}  
                      numberFollows={value.numberFollows} 
                      countDays={value.countDays}
                      colorTextToday={value.colorTextToday}
                      arrow={value.arrow}
                    />
                  ))
                }
              </>
            </GridCards>
            <h2>Overview - Today</h2>
            
            <GridCards>
              <>
                {
                  cards.overview?.map((value) => (
                    <OverViewCard 
                      title={value.title}
                      icon={value.icon}
                      number={value.number}
                      percents={value.percents}
                      colorText={value.colorText}
                      arrow={value.arrow}
                    />
                  ))
                }
              </>  
            </GridCards>
          </>
        </Main>
        
      </App>
    </ThemeProvider>
    
  )
}

export default CApp
