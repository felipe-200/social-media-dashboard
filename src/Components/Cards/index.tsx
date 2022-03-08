import { Card } from "./style"
import iconDown from '../../assets/images/icon-down.svg'
import iconUp from '../../assets/images/icon-up.svg'


interface ICardProps {
  icon: string,
  profile: string,
  numberFollows: string,
  countDays: string,
  colorTextToday: string,
  arrow: string
}

const CCard = ({icon, profile, numberFollows, countDays, colorTextToday, arrow}: ICardProps) => {
  const colorBorder = () => {
    if(icon.includes('youtube')) return 'hsl(348, 97%, 39%)'
    if(icon.includes('twitter')) return 'hsl(203, 89%, 53%)'
    if(icon.includes('facebook')) return 'hsl(208, 92%, 53%)'
    return 'linear-gradient(90deg, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%)) 100%'
  }

  return (
    <Card colorText={colorTextToday} colorBorder={colorBorder()!}>
      <figure>
        <picture>
          <img src={icon}/>
        </picture>
        <figcaption>{profile}</figcaption>
      </figure>
      <div>
        <h1>{numberFollows}</h1>
        <strong>FOLLOWERS</strong>
      </div>
        {arrow === 'up' ? (
          <figure>
            <picture> 
              <img src={iconUp}/>
            </picture> 
            <figcaption> <small> {countDays} </small> </figcaption>
        </figure> 
        ) : (
          <figure>
            <picture> 
              <img src={iconDown}/>
            </picture> 
            <figcaption> <small> {countDays} </small> </figcaption>
          </figure> 
        )
      }
    </Card>
  )
}

export default CCard