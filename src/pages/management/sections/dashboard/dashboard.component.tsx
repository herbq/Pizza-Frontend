import './dashboard.css'

import SlidingList from '../../../../components/management/dashboard/sliding-list/sliding-list.component';
import InfoCard from '../../../../components/management/dashboard/info-card/info-card.component';
import SectionsNav from '../../../../components/management/dashboard/sections-nav/sections-nav.componnet';
import dashImg1 from '../../../../assets/dashimg1.png'
import dashImg2 from '../../../../assets/dashimg2.png'
import dashImg3 from '../../../../assets/dashimg3.png'
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import DaySalesChart from '../../../../components/management/dashboard/charts/day-sales-chart/day-sales-chart.component';
import ChartContainer from '../../../../components/management/dashboard/charts/chart-container.component';
import PieChart from '../../../../components/management/dashboard/charts/best-selling-machines/best-selling-machines.component';
import BestSellingFood from '../../../../components/management/dashboard/charts/best-selling-food/best-selling-food.component';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';

const DashboardSection = () => {
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
          <p>Good Evening,</p>
          <p>Omar Herbawi</p>
        </div>
      </div>
    </ShowTimer>
    <ShowTimer timeout={50}>
      <div className="info-cards-container">
        <InfoCard image={dashImg1} backgroundColor="rgba(228, 174, 130, 0.2)" title="Total Sales" info="$40k"></InfoCard>
        <InfoCard image={dashImg2} backgroundColor="#fad85d2e" title="Total Profit" info="$10k"></InfoCard>
        <InfoCard image={dashImg3} backgroundColor="#f2a0ff2e" title="Completed Orders" info="50"></InfoCard>
        <InfoCard image={dashImg2} backgroundColor="#0bf4c82e" mini={true} title="Completed Orders" info="50"></InfoCard>
      </div>
    </ShowTimer>
    <ShowTimer timeout={100}>
      <SlidingList icon={faWarning} title="Warnings"></SlidingList>
    </ShowTimer>
    <div className='charts-container'>
      <ShowTimer timeout={150}><ChartContainer><DaySalesChart data={data} /></ChartContainer></ShowTimer>
      <ShowTimer timeout={200}><ChartContainer><DaySalesChart data={data} /></ChartContainer></ShowTimer>
      <ShowTimer timeout={250}><ChartContainer><PieChart
        data={[
          { label: "Machine A", value: 30 },
          { label: "Machine B", value: 20 },
          { label: "Machine C", value: 10 },
          { label: "Machine D", value: 15 },
          { label: "Machine E", value: 5 },
          { label: "Machine F", value: 20 },
        ]}
      /></ChartContainer></ShowTimer>
      <ShowTimer timeout={300}><ChartContainer><BestSellingFood></BestSellingFood></ChartContainer></ShowTimer>
    </div>
  </div>
}

export default DashboardSection;