import { Link } from 'react-router-dom'

function Destinations() {

    return (

        <>
            <main class="main">

                <section class="main--grid">

                    <h2 class="titles--subtitlesH2">Destinos Internacionales</h2>
                    <div class="container destinations">
                        <div class="row">

                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <figure class="effect-chico">
                                    <img src={require(`../assets/img/vacaciones-caribe-desde-rosario.jpg`)} class="destinations--img"
                                        alt="Viajes al Caribe." title="Viajes al Caribe." />
                                    <figcaption>
                                        <h3><span>Car</span>ibe</h3>
                                        <p>El paraíso All Inclusive</p>
                                        <Link to="/category/caribe"></Link>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <figure class="effect-chico">
                                    <img src={require(`../assets/img/vacaciones-brasil-desde-rosario.jpg`)} class="destinations--img"
                                        alt="Vacaciones en Brasil." title="Vacaciones en Brasil." />
                                    <figcaption>
                                        <h3><span>Br</span>asil</h3>
                                        <p>Buenas playas y buena onda.</p>
                                        <Link to="/category/brasil"></Link>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <figure class="effect-chico">
                                    <img src={require(`../assets/img/viajes-europa-tours-completos.jpg`)} class="destinations--img"
                                        alt="Viajes en Europa" title="Viajes en Europa" />
                                    <figcaption>
                                        <h3><span>Eu</span>ropa</h3>
                                        <p>Historia, Modernidad y Cultura: en el Viejo Mundo</p>
                                        <Link to="/category/europe"></Link>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <figure class="effect-chico">
                                    <img src={require(`../assets/img/viajes-exoticos-turismo.jpg`)} class="destinations--img"
                                        alt="Viajes Exóticos" title="Viajes Exóticos " />
                                    <figcaption>
                                        <h3><span>Exó</span>ticos</h3>
                                        <p>Cultura, Misterio y Aventura: Ásia, África y Oriente</p>
                                        <Link to="/category/exotic"></Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Destinations