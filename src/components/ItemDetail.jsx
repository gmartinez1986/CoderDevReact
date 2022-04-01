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
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Detalle del Paquete</h2>
            <br />
            {count ?
                <Link to="/Cart">
                    <button className='btn btn-primary'>Ir al Carrito</button>
                </Link>
                :
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
            <br />
            <br />
            Nombre del Paquete: {pack.name}
            <br />
            Detalle: {pack.description}
            <br />
            Precio: $ {pack.price.toLocaleString('es-es')}
            <br />
            <div className="card-body">
                <img src={require(`../assets/img/${pack.image}`)} alt='' className='w-50' />
            </div>
            <br />
        </>
    )
}

export default ItemDetail