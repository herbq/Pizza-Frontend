import { faArchive, faCog, faExchangeAlt, faHeadset, faIndustry, faRightFromBracket, faTableColumns, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sections-nav.css'

const SectionsNav = () => {
  return <div className="sections-nav-container">
    <div className='section'><FontAwesomeIcon icon={faTableColumns}></FontAwesomeIcon> Dashboard</div>
    <div className='section'><FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon> My Account</div>
    <div className='section selected'><FontAwesomeIcon icon={faIndustry}></FontAwesomeIcon> Machines</div>
    <div className='section'><FontAwesomeIcon icon={faArchive}></FontAwesomeIcon> Inventory</div>
    <div className='section'><FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon> Transactions</div>
    <hr />
    <div className='section'><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon> Customer Support</div>
    <div className='section logout'><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> Logout</div>
  </div>
}

export default SectionsNav;