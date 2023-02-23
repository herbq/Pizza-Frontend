import { Link } from 'react-router-dom';
import './logo.css'
import pizzaLogo from '../../../../assets/pizza-logo.png'

interface IProps {
    className?: string,
}

const Logo = ({ className }: IProps) => {
    return <Link to="/home" className={`hidable logo-container ${className}`}>
        <img src={pizzaLogo} alt="" />
        <p><span className='v'>P</span>izzeta</p>
    </Link>
}

export default Logo;