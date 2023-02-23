import './show-case-card.css'
import Button from '../../../../common/button/button.component'

interface IProps {
  image: string,
}

const ShowCaseCard = ({ image }: IProps) => {
  return <div className="show-case-card-container">
    <img src={image} alt="" />
    <h2 className='title'>Pizza Machine V3000</h2>
    <h3 className='subtitle'>Here, we introduce the best pizza vending machine ever made</h3>
    <Button>See details</Button>
  </div>
}

export default ShowCaseCard;