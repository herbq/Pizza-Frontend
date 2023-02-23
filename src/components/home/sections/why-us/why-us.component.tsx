import KnifeTitle from '../../knife-title/knife-title.component'
import NumberCard from '../../number-card/number-card.component'
import FeatureCard from './feature-card/feature-card.component'

import feature1 from '../../../../assets/feature1.png'
import feature2 from '../../../../assets/feature2.png'
import feature3 from '../../../../assets/feature3.png'

import './why-us.css'

const features = [{ title: `Regular cashback`, description: `Every month you can choose the categories of cashback for which you want to make a profit`, image: feature1, backgroundColor: `#e7e9fa` },
{ title: `Support 24/7`, description: `Our hotline is open 24/7 so that you can instantly resolve all your concerns`, image: feature2, backgroundColor: `#eaffed` },
{ title: `Easy payment`, description: `Easy to pay with Visa, Mastercard, American Express, Discover, JCB, Union Pay, and more`, image: feature3, backgroundColor: `#edf7ff` },
{ title: `Regular cashback`, description: `Easy to pay with Visa, Mastercard, American Express, Discover, JCB, Union Pay, and more`, image: feature1, backgroundColor: `#feffed` }]

const WhyUsSection = () => {
  return <div className="why-us-container">
    <KnifeTitle text={`Why us?`} column={true}></KnifeTitle>
    <div className="cards">
      {features.map(feature => <FeatureCard title={feature.title} description={feature.description} image={feature.image} backgroundColor={feature.backgroundColor}></FeatureCard>)}
    </div>
    <div className='numbers'>
      <NumberCard title='Machines Made' count={34}></NumberCard>
      <NumberCard title='Countries' count={7}></NumberCard>
      <NumberCard title='Customers' count={15}></NumberCard>
    </div>
  </div>
}

export default WhyUsSection