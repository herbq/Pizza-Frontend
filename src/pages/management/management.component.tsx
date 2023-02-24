import './management.css'

import InfoCard from '../../components/management/dashboard/info-card/info-card.component';

import dashImg1 from '../../assets/dashimg1.png'
import dashImg2 from '../../assets/dashimg2.png'
import dashImg3 from '../../assets/dashimg3.png'
import SectionsNav from '../../components/management/dashboard/sections-nav/sections-nav.componnet';
import DashboardSection from './sections/dashboard/dashboard.component';
import { useParams } from 'react-router';
import MachinesInfoSection from './sections/machines/machines-info.component';

const ManagementPage = () => {
  const { section } = useParams();
  return <div className="management-page">
    <div className="management-container">
      <SectionsNav></SectionsNav>
      {section == `dashboard` && <DashboardSection></DashboardSection>}
      {section == `machines-info` && <MachinesInfoSection></MachinesInfoSection>}
    </div>
  </div>
}

export default ManagementPage;