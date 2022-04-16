import AboutUs from '../components/AboutUs';

function Offers() {

    return (
        <>
            <main className="main">

                <section className="main--grid">

                    <div class="packages container">
                        <h2 className="titles--subtitlesH2">Ofertas</h2>

                        <AboutUs />

                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img height="510px" src={require(`../assets/img/Torre-Eiffel-de-París-de-noche-en-panorámica-min.jpg`)}
                                        className="d-block w-100" alt="Oferta Turismo" />
                                    <div className="carousel-caption d-none d-md-block bg-dark opacity-75 rounded-pill">
                                        <h5>Tour por Paris</h5>
                                        <p><b>25% de descuento</b></p>
                                        <p>Contempla las <b>espectaculares vistas de París desde la Torre Eiffel</b> y disfruta
                                            del icónico monumento <b>ahorrándote las interminables colas</b>.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img height="510px"
                                        src={require(`../assets/img/Italia_Venecia_shutterstock_324392561_Rudy Balasko_Shutterstock.jpg`)}
                                        className="d-block w-100" alt="Oferta Turismo" />
                                    <div className="carousel-caption d-none d-md-block bg-dark opacity-75 rounded-pill">
                                        <h5>Tour por Italia</h5>
                                        <p><b>30% de descuento</b></p>
                                        <p>En esta ocasión, le traemos un fantástico viaje que le permitirá conocer Venecia,
                                            Florencia y Roma, y descubrir lugares de ensueño como nunca lo había imaginado, y
                                            todo ello, a lo largo de una semana visitando los mejores puntos de cada una de esas
                                            ciudades. Además, lo hará con la compañía de los mejores guías turísticos y con
                                            servicios de alta calidad.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img height="510px" src={require(`../assets/img/sagrada-familia.jpg`)} className="d-block w-100"
                                        alt="Oferta Turismo" />
                                    <div className="carousel-caption d-none d-md-block bg-dark opacity-75 rounded-pill">
                                        <h5>Tour por España</h5>
                                        <p><b>40% de descuento</b></p>
                                        <p>Este antiguo país ibérico es uno de los mejores destinos del Mediterráneo, lleno de
                                            historia, sabores, culturas y gente interesante. La diversidad de la península,
                                            tanto geográfica como histórica, genera una oferta recreativa insuperable.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Offers