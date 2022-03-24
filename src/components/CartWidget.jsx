import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {

    const { quantityItem } = useCartContext();

    let cssClass = {};
    let count = quantityItem();

    if(count > 0){
        cssClass = {className: 'badge on'};
    }

    return (

        <li className="nav-item">
            <Link to="/cart" >
                <a className="nav-link" href="">
                    <span className='material-icons'>shopping_cart</span>
                    <span {...cssClass}>{count > 0 ? count:""}</span>
                </a>
            </Link>
        </li>

    );
};

export default CartWidget;