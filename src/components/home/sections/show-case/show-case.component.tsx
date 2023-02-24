import KnifeTitle from '../../knife-title/knife-title.component'
import './show-case.css'

import ShowCaseCard from './show-case-card/show-case-card.component'
import pizzaMachine1 from '../../../../assets/pizza-machine1.png'
import pizzaMachine2 from '../../../../assets/pizza-machine2.png';
import pizzaMachine3 from '../../../../assets/pizza-machine3.png';
import ShowTimer from '../../../base/show-timer/show-timer.component';
import { useState } from 'react';
import useScroll from '../../../../hooks/scroll.hook';

const ShowCaseSection = () => {
  const [elementRef, setElementRef] = useState(null);
  const isInView = useScroll(elementRef)

  return <section className='show-case-container'>
    <KnifeTitle text={`Our Machines`} column={true}></KnifeTitle>
    <div ref={setElementRef as any} className="cards">
      {isInView ?
        <>
          <ShowTimer timeout={100}><ShowCaseCard image={pizzaMachine1}></ShowCaseCard></ShowTimer>
          <ShowTimer timeout={200}><ShowCaseCard image={pizzaMachine2}></ShowCaseCard></ShowTimer>
          <ShowTimer timeout={300}><ShowCaseCard image={pizzaMachine3}></ShowCaseCard></ShowTimer>
        </>
        : null
      }
    </div>
  </section>
}

export default ShowCaseSection;