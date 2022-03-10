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
        </>
    )
}

export default ItemDetail