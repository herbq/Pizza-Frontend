import './machines-info.css'

import SlidingList from '../../../../components/management/dashboard/sliding-list/sliding-list.component';
import InfoCard from '../../../../components/management/dashboard/info-card/info-card.component';
import SectionsNav from '../../../../components/management/dashboard/sections-nav/sections-nav.componnet';
import dashImg1 from '../../../../assets/dashimg1.png'
import dashImg2 from '../../../../assets/dashimg2.png'
import dashImg3 from '../../../../assets/dashimg3.png'
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import DaySalesChart from '../../../../components/management/dashboard/charts/day-sales-chart/day-sales-chart.component';
import ChartContainer from '../../../../components/management/dashboard/charts/chart-container.component';
import PieChart from '../../../../components/management/dashboard/charts/best-selling-machines/best-selling-machines.component';
import BestSellingFood from '../../../../components/management/dashboard/charts/best-selling-food/best-selling-food.component';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import InfoCards from '../../../../components/management/machines-info/info-cards/info-cards.component';
import { useEffect } from 'react';
import L from 'leaflet';
import Map from './map/map.component';

const MachinesInfoSection = () => {

  const data = [
    { day: 'Mon', count: 5 },
    { day: 'Tue', count: 10 },
    { day: 'Wed', count: 7 },
    { day: 'Fri', count: 3 },
  ];

  return <div className="contents">
    <ShowTimer timeout={0}>
      <div className='header'>
        <div className='callout'>
          <p>Machine Info</p>
          <p>Pizza Machine V3000</p>
        </div>
      </div>
    </ShowTimer>
    <ShowTimer timeout={0}>
      <InfoCards></InfoCards>
    </ShowTimer>
    <ShowTimer timeout={100}>
      <SlidingList icon={faWarning} title="Warnings"></SlidingList>
    </ShowTimer>
    <ShowTimer timeout={150}>
      <Map className={null}></Map>
    </ShowTimer>
    <div className='charts-container'>
      <ShowTimer timeout={200}><ChartContainer><DaySalesChart data={data} /></ChartContainer></ShowTimer>
      <ShowTimer timeout={250}><ChartContainer><DaySalesChart data={data} /></ChartContainer></ShowTimer>
      <ShowTimer timeout={300}><ChartContainer><PieChart
        data={[
          { label: "Machine A", value: 30 },
          { label: "Machine B", value: 20 },
          { label: "Machine C", value: 10 },
          { label: "Machine D", value: 15 },
          { label: "Machine E", value: 5 },
          { label: "Machine F", value: 20 },
        ]}
      /></ChartContainer></ShowTimer>
      <ShowTimer timeout={350}><ChartContainer><BestSellingFood></BestSellingFood></ChartContainer></ShowTimer>
    </div>
  </div>
}

export default MachinesInfoSection;