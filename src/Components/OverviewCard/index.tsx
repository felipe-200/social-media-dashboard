import { OverViewCard } from './style'
import iconDown from '../../assets/images/icon-down.svg'
import iconUp from '../../assets/images/icon-up.svg'


interface IPropsOverViewsCard {
  icon: string,
  title: string,
  number: string,
  percents: string,
  colorText: string,
  arrow: string
}

const OverViewsCard = ({icon,
  title, number, percents, colorText, arrow}: IPropsOverViewsCard) => {
  return (
    <OverViewCard colorText={colorText}>
      <div>
        <strong>{title}</strong>
        <figure>
          <picture>
            <img src={icon}/>
          </picture>
        </figure>
      </div>
      <div>
        <h2>{number}</h2>
        {arrow === 'up' ? (
          <figure>
            <picture>
              <img src={iconUp} />
            </picture>
            <figcaption>
              <small>{percents}</small>
            </figcaption>
          </figure>
        ) : (
          <figure>
            <picture>
              <img src={iconDown} />
            </picture>
            <figcaption>
              <small>{percents}</small>
            </figcaption>
          </figure>
        )}
      </div>
    </OverViewCard>
  )
}

export default OverViewsCard