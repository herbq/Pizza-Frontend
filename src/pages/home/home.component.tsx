import './home.css'
import KnifeTitle from '../../components/home/knife-title/knife-title.component';
import ImageCards from '../../components/home/image-cards/image-cards.component';
import Button from '../../components/common/button/button.component';
import NumberCard from '../../components/home/number-card/number-card.component';

import FeatureCard from '../../components/home/feature-card/feature-card.component';
import LandingHeader from '../../components/home/sections/landing-header/landing-header.component';

import AboutUsSection from '../../components/home/sections/about-us/about-us.component';
import RatingsListSection from '../../components/home/sections/ratings-list/ratings-list.component';
import ShowCaseSection from '../../components/home/sections/show-case/show-case.component';
import WhyUsSection from '../../components/home/sections/why-us/why-us.component';

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