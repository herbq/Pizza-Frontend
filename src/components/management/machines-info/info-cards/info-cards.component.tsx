import { faChartLine, faCircle, faClock, faServer, faShoppingCart, faThermometerHalf, faUserClock } from '@fortawesome/free-solid-svg-icons';
import InfoCard from './info-card/info-card.component';
import './info-cards.css'

interface IProps {
  className?: string,
}

const InfoCards = ({className}: IProps) => {
  return <div className={`machine-info-cards-container ${className}`}>
    <InfoCard icon={faServer} content={<div><div className={`status${true ? ` online` : ` offline`}`}></div> <p>{true ? 'Online' : 'Offline'}</p></div>} >Status</InfoCard>
    <div className='border'></div>
    <InfoCard icon={faThermometerHalf} content={<p>10C</p>}>Temperature</InfoCard>
    <div className='border'></div>
    <InfoCard icon={faChartLine} content={<p>$124.75</p>}>Total Sales</InfoCard>
    <div className='border'></div>
    <InfoCard icon={faShoppingCart} content={<p>50 Units</p>}>Total Orders</InfoCard>
    <div className='border'></div>
    <InfoCard icon={faUserClock} content={<p>10:05:20</p>}>Up time</InfoCard>
  </div>
}

export default InfoCards;