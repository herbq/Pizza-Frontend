import KnifeTitle from '../../knife-title/knife-title.component'
import './show-case.css'

import ShowCaseCard from './show-case-card/show-case-card.component'
import pizzaMachine1 from '../../../../assets/pizza-machine1.png'
import pizzaMachine2 from '../../../../assets/pizza-machine2.png';
import pizzaMachine3 from '../../../../assets/pizza-machine3.png';

const ShowCaseSection = () => {
  return <section className='show-case-container'>
    <KnifeTitle text={`Our Machines`} column={true}></KnifeTitle>
    <div className="cards">
      <ShowCaseCard image={pizzaMachine1}></ShowCaseCard>
      <ShowCaseCard image={pizzaMachine2}></ShowCaseCard>
      <ShowCaseCard image={pizzaMachine3}></ShowCaseCard>
    </div>
  </section>
}

export default ShowCaseSection;