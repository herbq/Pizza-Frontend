import './manage-food.css'
import FoodTable from '../../components/manage-food/food-table/food-table.component';
import ShowTimer from '../../components/base/show-timer/show-timer.component';

const ManageFoodPage = () => {
    return <div className='manage-food-page'>
        <ShowTimer timeout={0}><FoodTable></FoodTable></ShowTimer>
    </div>
}

export default ManageFoodPage;