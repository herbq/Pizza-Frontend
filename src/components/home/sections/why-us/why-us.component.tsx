import KnifeTitle from '../../knife-title/knife-title.component'
import NumberCard from './number-card/number-card.component'
import FeatureCard from './feature-card/feature-card.component'

import feature1 from '../../../../assets/feature1.png'
import feature2 from '../../../../assets/feature2.png'
import feature3 from '../../../../assets/feature3.png'

import './why-us.css'
import ShowTimer, { AnimationType } from '../../../base/show-timer/show-timer.component'
import { generateRandomNumber } from '../../../../services/general.utils'
import { useRef, useState } from 'react'
import useScroll from '../../../../hooks/scroll.hook'

const features = [{ title: `Regular cashback`, description: `Every month you can choose the categories of cashback for which you want to make a profit`, image: feature1, backgroundColor: `#e7e9fa` },
{ title: `Support 24/7`, description: `Our hotline is open 24/7 so that you can instantly resolve all your concerns`, image: feature2, backgroundColor: `#eaffed` },
{ title: `Easy payment`, description: `Easy to pay with Visa, Mastercard, American Express, Discover, JCB, Union Pay, and more`, image: feature3, backgroundColor: `#edf7ff` },
{ title: `Regular cashback`, description: `Easy to pay with Visa, Mastercard, American Express, Discover, JCB, Union Pay, and more`, image: feature1, backgroundColor: `#feffed` }]

const WhyUsSection = () => {
  const [elementRef, setElementRef] = useState(null)
  const isInView = useScroll(elementRef);

  return <div ref={setElementRef as any} className="why-us-container">
    <KnifeTitle text={`Why us?`} column={true}></KnifeTitle>
    <div className="cards">
      {features.map((feature, i) => isInView ? <ShowTimer timeout={(100 * i) + 100} animationType={generateRandomNumber(2) ? AnimationType.FADE_IN_ROTATE_LEFT : AnimationType.FADE_IN_ROTATE_RIGHT}><FeatureCard title={feature.title} description={feature.description} image={feature.image} backgroundColor={feature.backgroundColor}></FeatureCard></ShowTimer> : null)}
    </div>
    <div className='numbers'>
      {isInView ? <ShowTimer timeout={100}><NumberCard title='Machines Made' count={34}></NumberCard></ShowTimer> : null}
      {isInView ? <ShowTimer timeout={200}><NumberCard title='Countries' count={7}></NumberCard></ShowTimer> : null}
      {isInView ? <ShowTimer timeout={300}><NumberCard title='Customers' count={15}></NumberCard></ShowTimer> : null}
    </div>
  </div>
}

export default WhyUsSection