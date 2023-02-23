import './add-machine.css'

import { useContext, useEffect, useState } from 'react'
import Input from '../../common/input/input.component'
import { IModal, ModalContext } from '../../../contexts/modal.context'
import { validateMachineOwner } from '../../../services/machine.utils'
import { NotificationContext } from '../../base/notification/notification-container/notification-container.component'
import { NotificationType } from '../../base/notification/notification-body/notification-body.component'

const AddMachineModal = () => {
  const userId = `190307`;

  const { setModalProps, closeModal } = useContext(ModalContext)
  const { pushNotification } = useContext(NotificationContext)

  const [token, setToken] = useState(``)
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  useEffect(() => {
    setModalProps((modalProps: IModal) => {
      return {
        ...modalProps, submit: async () => {
          const response = ((await validateMachineOwner(token, userId)) as Response)
          if (response.status == 400) {
            setValidationMessage((await response.json()).msg)
            return;
          }
          pushNotification(NotificationType.Success, `You have added a new machine to your collection`)
          closeModal(); // Success
        },
        preventClosing: true,
      }
    })
  }, [token])

  return <div className="body new-machine">
    <Input label="Token" placeholder='XXXX-XXXX-XXXX' value={token} onChange={(e: any) => { setToken(e.target.value) }}></Input>
    <p className={`${!validationMessage ? `invisible` : ``}`}>&nbsp;{validationMessage}</p>
  </div>
}

export default AddMachineModal;