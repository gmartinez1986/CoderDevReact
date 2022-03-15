import React from 'react';
import ItemCount from '../components/ItemCount';

const onAdd = (cant) => {
    alert(`Se han agregado ${cant}  paquetes turisticos al carrito`);
}

const ItemDetail = ({ product }) => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Detalle del Paquete</h2>
            <br />
            Nombre del Paquete: {product.name}
            <br />
            Detalle: {product.description}
            <br />
            Precio: $ {product.price.toLocaleString('es-es')}
            <br />
            <div className="card-body">
                <img src={require(`../assets/img/${product.image}`)} alt='' className='w-50' />
            </div>
            <br />          
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    )
}

export default ItemDetail