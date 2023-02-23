import { useContext, useState } from "react";
import AddFoodModal from "../../components/modal/add-food/add-food.modal";
import { IModal, ModalContext } from "../../contexts/modal.context";
import { IFood } from "../../interfaces/food.interface";
import { createNewFood, deleteFood, getFoodList, updateFood } from "../../services/food.utils";
import usePagination from "../page.hook";
import useParams from "../params.hook";


function useFoodList(userId: string) {
  const { setModalProps } = useContext(ModalContext)

  const [foodList, setList] = useState<IFood[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [search, setSearch, compareSearch] = useParams('search')
  const filteredFoodList = foodList.filter((food: IFood) => compareSearch(food.name))

  const { currentPage, setCurrentPage, pageCount, index, available } = usePagination(filteredFoodList.length, 5);
  const pagedFoodList = filteredFoodList.filter((food: IFood, i: number) => {
    return i >= index.start && i < index.end;
  })

  const fetchFoodList = async () => {
    setLoading(true)
    if (foodList.length == 0) {
      await (new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(null)
        }, 800);
      }))
    }
    setList(await getFoodList(userId))
    setLoading(false)
  }

  const createNewFoodListing = async (name: string, image: string, actualPrice: number, sellingPrice: number) => {
    console.log(`created`)
    await createNewFood(userId, name, image, actualPrice, sellingPrice)
    fetchFoodList();
  }

  const updateFoodListing = async (foodId: string, name: string, image: string, actualPrice: number, sellingPrice: number) => {
    console.log(`updated`)
    await updateFood(userId, foodId, { name, image: image, actualPrice, sellingPrice })
    fetchFoodList();
  }

  const deleteFoodListing = async (foodId?: string) => {
    await deleteFood(userId, foodId);
    fetchFoodList();
  }

  const openAddFoodModal = (foodInfo?: IFood) => {
    const modalProps: IModal = {
      header: {
        title: `Manage Food`,
        subtitle: `This dialog will required some fields to ${foodInfo ? `edit an existing` : `add a new`} food listing`
      },
      body: <AddFoodModal createNewFoodListing={createNewFoodListing} updateFoodListing={updateFoodListing} modalContent={foodInfo}></AddFoodModal>
    }
    setModalProps(modalProps)
  }


  return { foodList: pagedFoodList, fetchFoodList, createNewFoodListing, updateFoodListing, deleteFoodListing, pagination: { currentPage, setCurrentPage, pageCount, available }, loading, modals: { openAddFoodModal } }
}

export default useFoodList;