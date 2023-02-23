import './add-food.css'
import { useContext, useEffect, useState } from 'react';
import Input from '../../common/input/input.component'
import { IFood } from '../../../interfaces/food.interface';
import { IModal, ModalContext } from '../../../contexts/modal.context';

interface IProps {
  modalContent?: IFood,
  createNewFoodListing: any,
  updateFoodListing: any,
}

const AddFoodModal = ({ createNewFoodListing, updateFoodListing, modalContent }: IProps) => {

  const { setModalProps } = useContext(ModalContext)

  const userId = `190307`;
  const [name, setName] = useState(modalContent?.name || '')
  const [image, setImage] = useState<any>(modalContent?.image || '')
  const [actualPrice, setActualPrice] = useState(modalContent?.actual_price || '')
  const [sellingPrice, setSellingPrice] = useState(modalContent?.selling_price || '')

  useEffect(() => {
    setModalProps((modalProps: IModal) => {
      return { ...modalProps, submit: () => { modalContent ? updateFoodListing(modalContent.id, name, image, actualPrice, sellingPrice) : createNewFoodListing(name, image, actualPrice, sellingPrice) } }
    })
  }, [name, image, actualPrice, sellingPrice])


  function handleFileSelect(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }


  return <div className="body">
    <Input label="Name" placeholder='Mozzarella Pizza' value={name} onChange={(e: any) => { setName(e.target.value) }}></Input>
    <Input label="Image URL" type={`file`} placeholder='images.google.com/' onChange={handleFileSelect}></Input>
    <Input type={`number`} label="Actual Price" placeholder='$4.99' value={actualPrice} onChange={(e: any) => { setActualPrice(e.target.value) }}></Input>
    <Input type={`number`} label="Selling Price" placeholder='$9.99' value={sellingPrice} onChange={(e: any) => { setSellingPrice(e.target.value) }}></Input>
  </div>
}

export default AddFoodModal;