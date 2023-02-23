import './no-items.found.css'
import noItemsFoundImg from '../../../assets/no-items-found.png'

const NoItemsFound = () => {
  return <div className="no-items-found-container">
    <img src={noItemsFoundImg} alt="" />
  </div>
}

export default NoItemsFound