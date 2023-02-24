import './number-card.css'
import Counter from '../../../../common/counter/counter.component';

interface IProps {
  title: string,
  count: number,
  className?: string,
}

const NumberCard = ({ title, count, className }: IProps) => {
  return <div className={`number-card-container ${className}`}>
    <Counter max_value={count}></Counter>
    <h1 className='title'>{title}</h1>
  </div>
}

export default NumberCard;