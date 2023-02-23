import './landing-header.css'
import ShowTimer, { AnimationType } from '../../../base/show-timer/show-timer.component'

const LandingHeader = () => {

  const getRandom3 = () => ((Math.ceil(Math.random() * 10)) % 3) + 1;

  return <div className="header">
    <div className='content'>
      <ShowTimer timeout={100} animationType={AnimationType.FADE_UP}><p className='title hidable'>
        <span className={`c${getRandom3()}`}>P</span>
        <span className={`c${getRandom3()}`}>i</span>
        <span className={`c${getRandom3()}`}>z</span>
        <span className={`c${getRandom3()}`}>z</span>
        <span className={`c${getRandom3()}`}>e</span>
        <span className={`c${getRandom3()}`}>t</span>
        <span className={`c${getRandom3()}`}>a</span>
      </p></ShowTimer>
      <ShowTimer timeout={300} animationType={AnimationType.FADE_UP}><p className='subtitle hidable'>Pizza perfection in minutes - no lines, no waiting.</p></ShowTimer>
    </div>
  </div>
}

export default LandingHeader;