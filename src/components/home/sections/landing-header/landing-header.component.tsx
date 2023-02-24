import './landing-header.css'
import ShowTimer, { AnimationType } from '../../../base/show-timer/show-timer.component'
import Button from '../../../common/button/button.component';
import { generateRandomNumber } from '../../../../services/general.utils';

const LandingHeader = () => {

  const getRandom3 = () => generateRandomNumber(3)

  return <div className="header">
    <div className='content'>
      <ShowTimer timeout={100} animationType={AnimationType.FADE_UP}><h1 className='title'>
        <span className={`c${getRandom3()}`}>P</span>
        <span className={`c${getRandom3()}`}>i</span>
        <span className={`c${getRandom3()}`}>z</span>
        <span className={`c${getRandom3()}`}>z</span>
        <span className={`c${getRandom3()}`}>e</span>
        <span className={`c${getRandom3()}`}>t</span>
        <span className={`c${getRandom3()}`}>a</span>
      </h1></ShowTimer>
      <ShowTimer timeout={300} animationType={AnimationType.FADE_UP}><p className='subtitle'>Pizza perfection in minutes - no lines, no waiting.</p></ShowTimer>
      <Button onClick={() => {
        const element = document.querySelector('.show-case-container');
        element != null && element.scrollIntoView({ behavior: 'smooth' });
      }}>Machines List</Button>
    </div>
  </div>
}

export default LandingHeader;