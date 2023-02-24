import './dashboard.css'

import SlidingList from '../../../../components/management/dashboard/sliding-list/sliding-list.component';
import InfoCard from '../../../../components/management/dashboard/info-card/info-card.component';
import SectionsNav from '../../../../components/management/dashboard/sections-nav/sections-nav.componnet';
import dashImg1 from '../../../../assets/dashimg1.png'
import dashImg2 from '../../../../assets/dashimg2.png'
import dashImg3 from '../../../../assets/dashimg3.png'
import { faWarning } from '@fortawesome/free-solid-svg-icons';

const DashboardSection = () => {
  return <div className="dashboard-section">
    <div className="management-page">
      <div className="management-container">
        <SectionsNav></SectionsNav>
        <div className="contents">
          <div className='header'>
            <div className='callout'>
              <p>Good Evening,</p>
              <p>Omar Herbawi</p>
            </div>
          </div>
          <div className="info-cards-container">
            <InfoCard image={dashImg1} backgroundColor="rgba(228, 174, 130, 0.2)" title="Total Sales" info="$40k"></InfoCard>
            <InfoCard image={dashImg2} backgroundColor="#fad85d2e" title="Total Profit" info="$10k"></InfoCard>
            <InfoCard image={dashImg3} backgroundColor="#f2a0ff2e" title="Completed Orders" info="50"></InfoCard>
            <InfoCard image={dashImg2} backgroundColor="#0bf4c82e" mini={true} title="Completed Orders" info="50"></InfoCard>
          </div>
          <SlidingList icon={faWarning} title="Warnings"></SlidingList>
        </div>
      </div>
    </div>
  </div>
}

export default DashboardSection;