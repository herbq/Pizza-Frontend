import './about-us.css'
import Button from '../../../common/button/button.component';
import ImageCards from './image-cards/image-cards.component';
import KnifeTitle from '../../knife-title/knife-title.component';
import ShowTimer, { AnimationType } from '../../../base/show-timer/show-timer.component';
import useScroll from '../../../../hooks/scroll.hook';
import { useState } from 'react';

const AboutUsSection = () => {

  return <section className='about-us-container'>

    <div>
      <KnifeTitle text={`ABOUT US`}></KnifeTitle>
      <p className='title'>WE ALWAYS PROVIDE QUALITY MACHINES FOR YOU</p>
      <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas eligendi, magni vero incidunt rerum debitis consectetur itaque explicabo possimus.</p>
      <Button>DISCOVER MORE</Button>
    </div>

    <div>
      <ImageCards></ImageCards>
    </div>
  </section>
}

export default AboutUsSection;