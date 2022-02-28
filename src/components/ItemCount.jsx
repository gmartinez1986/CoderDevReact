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
            <h3>Paquetes Turisticos</h3>
            <br/>
            <p>Total de paquetes disponibles {stock}</p>
            <button onClick={subtract}> - </button>
            <label> {count} </label>
            <button onClick={add}> + </button><br />
            <button onClick={addCart}>Add to Cart</button>
        </>
    )
}

export default ItemCount;