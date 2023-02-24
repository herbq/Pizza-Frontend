import './food-table.css'
import { useContext, useEffect, useRef, useState } from 'react';
import SearchBar from '../../common/search/search-bar.component';
import PageCounter from '../../common/page-counter/page-counter.component';
import Button from '../../common/button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import getPageCount from '../../../services/page.utils';
import useParams from '../../../hooks/params.hook';
import { IFood } from '../../../interfaces/food.interface';
import { deleteFood, getFoodList } from '../../../services/food.utils';
import { IModal, ModalContext } from '../../../contexts/modal.context';
import AddFoodModal from '../../modal/add-food/add-food.modal';
import useFoodList from '../../../hooks/food/food-list.hook';
import Loading from '../../common/loading/loading.component';
import ShowTimer, { AnimationType } from '../../base/show-timer/show-timer.component';
import NoItemsFound from '../no-items-found/no-items-found.component';

const FoodTable = ({ className }: { className?: string }) => {
    const userId = `190307`;
    const { foodList, fetchFoodList, createNewFoodListing, updateFoodListing, deleteFoodListing, pagination, loading, modals } = useFoodList(userId);

    useEffect(() => {
        fetchFoodList();
    }, [])

    return <ShowTimer timeout={0} animationType={AnimationType.FADE_UP}><div className={`food-table-container`}>
        <div className='header'>
            <SearchBar disabled={false}></SearchBar>
            <Button onClick={() => { modals.openAddFoodModal() }}><FontAwesomeIcon icon={faPlus} fontSize={14} color="white" /> Add New</Button>
        </div>
        <div className='table-container'>
            {loading && !foodList.length ? <Loading text={`Fetching Data`}></Loading>
                : (foodList.length != 0 ?
                    <table>
                        <thead>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Food</td>
                                <td>Image</td>
                                <td>Actual Price</td>
                                <td>Selling Price</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {foodList.map((food: IFood, i: number) => {
                                return <tr key={`${food}${i}`}>
                                    <td><input type="checkbox" /></td>
                                    <td><p>{food.name}</p></td>
                                    <td><img src={food.image} alt="" /></td>
                                    <td><p>${food.actual_price}</p></td>
                                    <td><p>${food.selling_price}</p></td>
                                    <td><button onClick={async () => { deleteFoodListing(food?.id) }}><FontAwesomeIcon icon={faXmark} /></button><button onClick={() => { modals.openAddFoodModal(food) }}><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                                </tr>
                            })}
                        </tbody>
                    </table> :
                    <NoItemsFound></NoItemsFound>)}
        </div>
        <div className='footer'>
            <PageCounter currentPageNum={pagination.currentPage} setCurrentPageNum={pagination.setCurrentPage} totalPages={pagination.pageCount} available={pagination.available}></PageCounter>
        </div>
    </div></ShowTimer>
}

export default FoodTable;