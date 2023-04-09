import './machines.css'

import Card from '../../components/machines/card/card.component'
import { useContext, useEffect, useState } from 'react'
import ShowTimer from '../../components/base/show-timer/show-timer.component'
import { RequestType, sendRequest } from '../../services/general.utils'
import { IMachine } from '../../interfaces/machine.interface'
import { IModal, ModalContext } from '../../contexts/modal.context'
import MachineInfoModal from '../../components/modal/machine-info/machine-info.modal'
import AddMachineModal from '../../components/modal/add-machine/add-machine.modal'

const MachinesPage = () => {

    const { setModalProps } = useContext(ModalContext)

    const [isAddModalShown, setAddModalShown] = useState(false)
    const [machines, setMachines] = useState<IMachine[]>([])

    useEffect(() => {
        sendRequest(`machine/list/2`, RequestType.GET, {}).then(
            (res) => {
                setMachines(res)
            }
        )
    }, [])

    return <div className="machines-page">
        {/* {isModalShown && <Modal setModalShown={setModalShown} modalContent={modalContent}></Modal>} */}
        {/* {isAddModalShown && <NewMachineModal setModalShown={setAddModalShown}></NewMachineModal>} */}
        <div className="cards-container">
            {machines != null && machines.map((machine, i) => {
                const modalProps: IModal = {
                    header: {
                        title: `hey`,
                        subtitle: `qwe`
                    },
                    body: <MachineInfoModal machine={machine}></MachineInfoModal>
                }
                return <ShowTimer timeout={50 * i}><Card showModal={() => { setModalProps(modalProps) }} machine={machine} img={`https://cdn.discordapp.com/attachments/990816819654852648/1073863781681213531/INV_A_front_view_of_a_modern_pizza_vending_machine_with_a_touc_e53f5254-2376-40e7-9c35-9922d41058c6.png`}></Card></ShowTimer>
            })}
            {machines && <ShowTimer timeout={50 * machines.length}><Card showModal={() => {
                const modalProps: IModal = {
                    header: {
                        title: `Add a new machine`,
                        subtitle: `This dialog will require your machine's token in order to add it into your  collection`
                    },
                    body: <AddMachineModal></AddMachineModal>
                }
                setModalProps(modalProps)
            }} isAddButton={true}></Card></ShowTimer>}
        </div>
    </div>
}

export default MachinesPage