import './show-case-card.css'
import Button from '../../../../common/button/button.component'
import ShowTimer, { AnimationType } from '../../../../base/show-timer/show-timer.component';

interface IProps {
  className?: string,
  image: string,
  setElementRef?: any,
}

const ShowCaseCard = ({ className, image, setElementRef }: IProps) => {
  return <div ref={setElementRef} className={`show-case-card-container ${className}`}>
    <ShowTimer timeout={0} animationType={AnimationType.SCALE}><img src={image} alt="" /></ShowTimer>
    <h2 className='title'>Pizza Machine V3000</h2>
    <h3 className='subtitle'>Here, we introduce the best pizza vending machine ever made</h3>
    <Button>See details</Button>
  </div>
}

export default ShowCaseCard;