import { Link } from 'react-router-dom'

function CartEmpty() {

    return (

        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <b>Cart</b>
            <br />
            <br />
            <p>No hay items seleccionados</p>
            <br />
            <br />
            <Link to="/">
                <button className='btn btn-primary'>Ir a las ofertas</button>
            </Link>
            <br />
            <br />
            <br />
        </>
    )
}

export default CartEmpty