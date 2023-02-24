import { faArchive, faCog, faExchangeAlt, faHeadset, faIndustry, faRightFromBracket, faTableColumns, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router';
import './sections-nav.css'

const SectionsNav = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  return <div className="sections-nav-container">
    <div onClick={() => { navigate(`/management/dashboard`) }} className={`section ${section?.toLowerCase() == `dashboard` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faTableColumns}></FontAwesomeIcon> Dashboard</p></div>
    <div onClick={() => { navigate(`/management/account`) }} className={`section ${section?.toLowerCase() == `account` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon> My Account</p></div>
    <div onClick={() => { navigate(`/management/machines-info`) }} className={`section ${section?.toLowerCase() == `machines-info` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faIndustry}></FontAwesomeIcon> Machines</p></div>
    <div onClick={() => { navigate(`/management/inventory`) }} className={`section ${section?.toLowerCase() == `inventory` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faArchive}></FontAwesomeIcon> Inventory</p><div className='error'>5</div></div>
    <div onClick={() => { navigate(`/management/transactions`) }} className={`section ${section?.toLowerCase() == `transactions` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon> Transactions</p></div>
    <hr />
    <div onClick={() => { navigate(`/management/support`) }} className={`section ${section?.toLowerCase() == `support` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon> Customer Support</p></div>
    <div className={`section logout`}><p><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> Logout</p></div>
  </div>
}

export default SectionsNav;