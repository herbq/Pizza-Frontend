import './feature-card.css'

interface IProps {
  image: string,
  title: string,
  description: string,
  backgroundColor: string,
  className?: string,
}

const FeatureCard = ({ title, description, image, backgroundColor, className }: IProps) => {
  return <div className={`feature-card-container ${className}`} style={{ backgroundColor }}>
    <img src={image} alt="" />
    <div className="content">
      <h2 className='title'>{title}</h2>
      <h3 className='subtitle'>{description}</h3>
    </div>
  </div>
}

export default FeatureCard;