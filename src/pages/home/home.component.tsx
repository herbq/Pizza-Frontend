import './home.css'
import LandingHeader from '../../components/home/sections/landing-header/landing-header.component';

import AboutUsSection from '../../components/home/sections/about-us/about-us.component';
import RatingsListSection from '../../components/home/sections/ratings-list/ratings-list.component';
import ShowCaseSection from '../../components/home/sections/show-case/show-case.component';
import WhyUsSection from '../../components/home/sections/why-us/why-us.component';
import { useEffect, useRef, useState } from 'react';
import useScroll from '../../hooks/scroll.hook';

const HomePage = () => {

  return <div className="home-page">
    <LandingHeader></LandingHeader>
    <div className="body">
      <AboutUsSection></AboutUsSection>
      <RatingsListSection></RatingsListSection>
      <ShowCaseSection></ShowCaseSection>
      <WhyUsSection></WhyUsSection>
    </div>
  </div>
}

export default HomePage;