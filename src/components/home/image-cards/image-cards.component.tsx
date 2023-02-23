import './image-cards.css'
import pizza1 from '../../../assets/pizza1.jpg'
import pizza2 from '../../../assets/pizza2.jpg'
import pizza3 from '../../../assets/pizza3.jpg'
import pizza4 from '../../../assets/pizza4.webp'
import pizza5 from '../../../assets/pizza5.jpg'

const ImageCards = () => {
  return <div className='image-cards-container'>
    <div className='image-cards'>

      <div className='img-set'>
        <img className='set-item' src={pizza1} alt="" />
        <img className='set-item' src={pizza2} alt="" />
        <img className='set-item' src={pizza3} alt="" />
      </div>

      <div className='img-set'>
        <div className='set-item'>
          <p>+6 Years</p>
          <p>Experience</p>
        </div>
        <img className='set-item' src={pizza4} alt="" />
        <img className='set-item' src={pizza5} alt="" />
      </div>

    </div>
  </div>
}

export default ImageCards;