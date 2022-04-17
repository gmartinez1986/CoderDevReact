import { Link } from 'react-router-dom'

function CartEmpty() {

    return (

        <>
            <main className="main">
                <h2 className="titles--subtitlesH2" id="title1">Carrito</h2>
                <section className="main--grid">
                    <h3 className="titles--subtitlesH3" id="title2">No hay items seleccionados</h3>
                    <div className="container text-center" style={{height: "20rem"}}>
                        <Link to="/">
                            <button className='btn btn-primary'>Ir a los destacados</button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CartEmpty