import { faAngleLeft, faArchive, faCog, faExchangeAlt, faHeadset, faIndustry, faPizzaSlice, faRightFromBracket, faTableColumns, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useToggle from '../../../../hooks/toggle.hook';
import ShowTimer from '../../../base/show-timer/show-timer.component';
import './sections-nav.css'

const SectionsNav = () => {
  const { section } = useParams();
  const [machinesMenu, setMachinesMenu] = useState(false);
  const navigate = useNavigate();
  return <ShowTimer timeout={0}>
    <div className={`sections-nav-container ${machinesMenu == true ? `machine` : ``}`}>
      <div className='nav normal-menu'>
        <div onClick={() => { section?.toLowerCase() != `dashboard` && navigate(`/management/dashboard`) }} className={`section ${section?.toLowerCase() == `dashboard` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faTableColumns}></FontAwesomeIcon> Dashboard</p></div>
        <div onClick={() => { section?.toLowerCase() != `account` && navigate(`/management/account`) }} className={`section ${section?.toLowerCase() == `account` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon> My Account</p></div>
        <div onClick={() => { setMachinesMenu(true) }} className={`section ${section?.toLowerCase() == `machines-info` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faIndustry}></FontAwesomeIcon> Machines</p></div>
        <div onClick={() => { section?.toLowerCase() != `inventory` && navigate(`/management/inventory`) }} className={`section ${section?.toLowerCase() == `inventory` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faArchive}></FontAwesomeIcon> Inventory</p><div className='error'>5</div></div>
        <div onClick={() => { section?.toLowerCase() != `transactions` && navigate(`/management/transactions`) }} className={`section ${section?.toLowerCase() == `transactions` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon> Transactions</p></div>
      </div>
      <div className='nav machines-menu'>
        <div onClick={() => { setMachinesMenu(false) }} className={`section ${section?.toLowerCase() == `dashboard` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon> Back</p></div>
        <div className="scrollable">
          <div onClick={() => { section?.toLowerCase() != `account` && navigate(`/management/account`) }} className={`section ${section?.toLowerCase() == `account` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon> Pizza Machine 3000</p></div>
          <div onClick={() => { section?.toLowerCase() != `account` && navigate(`/management/account`) }} className={`section ${section?.toLowerCase() == `account` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon> Pizza Machine 3000</p></div>
          <div onClick={() => { section?.toLowerCase() != `account` && navigate(`/management/account`) }} className={`section ${section?.toLowerCase() == `account` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon> Pizza Machine 3000</p></div>
          <div onClick={() => { section?.toLowerCase() != `account` && navigate(`/management/account`) }} className={`section ${section?.toLowerCase() == `account` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon> Pizza Machine 3000</p></div>
          <div onClick={() => { section?.toLowerCase() != `account` && navigate(`/management/account`) }} className={`section ${section?.toLowerCase() == `account` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon> Pizza Machine 3000</p></div>
        </div>
      </div>
      <hr />
      <div onClick={() => { navigate(`/management/support`) }} className={`section ${section?.toLowerCase() == `support` ? `selected` : ``}`}><p><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon> Customer Support</p></div>
      <div className={`section logout`}><p><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> Logout</p></div>
    </div>
  </ShowTimer>
}

export default SectionsNav;