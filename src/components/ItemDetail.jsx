import { useState } from 'react';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from "../context/CartContext"

const ItemDetail = ({ pack }) => {

    const [count, setCount] = useState(null);

    const { addToCart } = useCartContext();

    const onAdd = cant => {

        setCount(cant);
        addToCart({ ...pack, cantidad: cant });
    }

    return (
        <>
            <div classNam="details__container">
                <h2 className="titles--subtitlesH2">Detalle del Producto</h2>
                <h3 className="titles--subtitlesH3" id="title2">{pack.name}</h3>

                <div className="details__container">
                    <img src={require(`../assets/img/${pack.image}`)} alt='' class="details__container--img" />

                    <p className="details__container--text">{pack.description}</p>
                    <p className="details__container--price">$ {pack.price.toLocaleString('es-es')}</p>

                    <div className='details__container--text'>
                        {count ?
                            <Link to="/Cart">
                                <button className='btn btn-invert btn-md' style={{ "align-content": "center" }}>Ir al Carrito</button>
                            </Link>
                            :
                            <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail