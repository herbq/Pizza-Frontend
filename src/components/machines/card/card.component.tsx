import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMachine } from '../../../interfaces/machine.interface'
import './card.css'

interface IProps {
    showModal: () => void,
    machine?: IMachine,
    img?: string,
    className?: string,
    isAddButton?: boolean,
}

const Card = ({ showModal, machine, img, className, isAddButton }: IProps) => {
    if (!isAddButton) {
        return <div onClick={() => { showModal() }} className={`card-container ${className}`}>
            <div className="header">
                <img src={img} alt="" />
            </div>
            <h2 className='title'>{machine?.name}</h2>
            <div className='content'>
                <p><span className='sub-title'>Location:</span> {machine?.location}</p>
                <p><span className='sub-title'>In Stock:</span> {machine?.stock}</p>
                <p className={machine?.status ? `online` : `offline`}><span className='sub-title'>Status:</span> {machine?.status ? `Online` : `Offline`}</p>
            </div>
            <div className='footer'>
                <div className={`indicator${!machine?.status ? ' red' : ``}`}></div>
                <p className='indicator-text'>Show more</p>
            </div>
        </div>
    } else {
        return <div onClick={() => { showModal() }} className={`card-container btn ${className}`}>
            <div>
                <FontAwesomeIcon icon={faPlusCircle} fontSize={80} color="gray" />
                <p>ADD A NEW MACHINE</p>
            </div>
        </div>
    }
}

export default Card;