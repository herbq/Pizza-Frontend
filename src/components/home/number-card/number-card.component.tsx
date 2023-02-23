import Counter from '../../common/counter/counter.component';
import './number-card.css'

interface IProps {
  title: string,
  count: number,
}

const NumberCard = ({ title, count }: IProps) => {
  return <div className="number-card-container">
    <Counter max_value={count}></Counter>
    <h1 className='title'>{title}</h1>
  </div>
}

export default NumberCard;