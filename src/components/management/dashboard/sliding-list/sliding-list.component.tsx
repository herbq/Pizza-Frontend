import { faAngleDown, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToggle from '../../../../hooks/toggle.hook';
import Button from '../../../common/button/button.component';
import './sliding-list.css'

const SlidingList = () => {
  const [isExtended, toggleIsExtended] = useToggle(false)

  return <div className="sliding-list-container">
    <div className='header'><p> <FontAwesomeIcon icon={faWarning}></FontAwesomeIcon> Warnings</p> <div onClick={() => {
      toggleIsExtended()
    }} className={`extend${isExtended ? ` active` : ``}`}><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></div></div>
  </div>
}

export default SlidingList;