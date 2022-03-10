import React from 'react';

const ItemDetail = ({ product }) => {
    return (
        <>
            <h2>Detalle del Paquete</h2>
            <br />
            Nombre del Paquete: {product.name}
            <br />
            Detalle: {product.description}
            <br />
            Precio: {product.price}
            <br />
            <div className="card-body">
                <img src={require(`../assets/img/${product.image}`)} alt='' className='w-50' />
            </div>
            <br />
        </>
    )
}

export default ItemDetail