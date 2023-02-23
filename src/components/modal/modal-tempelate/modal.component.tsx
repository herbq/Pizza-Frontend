import './modal.css'
import ShowTimer, { AnimationType } from '../../base/show-timer/show-timer.component'
import Button from '../../common/button/button.component'
import { ReactNode, SyntheticEvent, useContext } from 'react'
import { IModal, ModalContext } from '../../../contexts/modal.context'


const Modal = () => {

    const { modalProps, setModalProps, closeModal } = useContext(ModalContext)

    const handleEvent = (e: SyntheticEvent<HTMLDivElement>) => {
        console.log(`qweqweqweqwe`)
    };

    return <ShowTimer timeout={0} animationType={AnimationType.FADE_IN}><div className="modal-container hidable">
        <ShowTimer timeout={0}>
            <div className='modal hidable'>
                <div className="header">
                    <p className='title'>{modalProps?.header?.title}</p>
                    <p className='text'>{modalProps?.header?.subtitle}</p>
                </div>
                {modalProps != null && modalProps.body}
                <div className="footer">
                    <Button onClick={() => {
                        modalProps?.cancel != null && modalProps?.cancel();
                        closeModal();
                    }}>Cancel</Button>
                    <Button onClick={async () => {
                        modalProps?.submit != null && modalProps?.submit();
                        (!modalProps?.preventClosing) && closeModal();
                    }}>Save</Button>
                </div>
            </div>
        </ShowTimer>
    </div>
    </ShowTimer>
}

export default Modal