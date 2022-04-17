import {useState} from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    const add = () => {
        if (count < stock) {
            setCount( count + 1 );
        }
    }

    const subtract = () => {
        if (count > initial) {
            setCount( count - 1 );
        }
    }

    const addCart = () => {
        onAdd( count );
    }

    return (
        <>
            <p>Total de paquetes turisticos disponibles {stock}</p>
            <button className='btn btn-invert btn-md' onClick={subtract}> - </button>
            <label style={{margin: "1rem"}}>   {count}   </label>
            <button className='btn btn-invert btn-md' onClick={add}> + </button><br />
            <br/>
            <button className='btn btn-invert btn-md' onClick={addCart}>Añadir al carrito</button>
        </>
    )
}

export default ItemCount;