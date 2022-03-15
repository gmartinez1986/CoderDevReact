import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (

        <li className="nav-item">
            <Link to="/cart" >
                <a className="nav-link" href="">
                    <span className='material-icons'>shopping_cart</span>
                    <span id="count"></span>
                </a>
            </Link>
        </li>

    );
};

export default CartWidget;