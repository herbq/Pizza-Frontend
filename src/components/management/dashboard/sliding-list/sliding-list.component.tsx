import { faAngleDoubleDown, faAngleDown, faAnglesDown, faArrowDown, faChevronCircleDown, faChevronDown, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToggle from '../../../../hooks/toggle.hook';
import Button from '../../../common/button/button.component';
import './sliding-list.css'

interface IProps {
  icon: any,
  title: string,
}

const SlidingList = ({ icon, title }: IProps) => {
  const [isExtended, toggleIsExtended] = useToggle(false)

  const msgs = [`Machine #1234 is out of stock!`, `Machine #1234 temperature sensor isn't working!`, `Machine #1234 temperature sensor isn't working!`, `Machine #1234 temperature sensor isn't working!`]

  return <div className="sliding-list-container">
    <div className='header'><p> <FontAwesomeIcon icon={icon}></FontAwesomeIcon> {title}</p> <Button disabled={(msgs?.length <= 3)} onClick={toggleIsExtended}
      className={`extend${isExtended ? ` active` : ``}`}><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></Button></div>
    <div className='body'>
      {/* You're all good! */}
      <ul>
        {
          msgs.map((msg, i) => (i < 3 || isExtended ? <li>{msg}</li> : null))
        }
      </ul>
      {(!isExtended && msgs?.length > 3) ? <FontAwesomeIcon onClick={toggleIsExtended} className='load-more-icon' icon={faAnglesDown}></FontAwesomeIcon> : null}
    </div>
  </div>
}

export default SlidingList;