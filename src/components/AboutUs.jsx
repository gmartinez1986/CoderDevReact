
function AboutUs() {

    return (
        <>
            <div className="row" style={{ margin: "3%" }}>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <ul className="acordeon">
                        <li style={{ background: "#3b5998" }}>
                            <h4><a href="https://www.facebook.com/AgenciaDeTurismo/" target="_blank" rel="noopener noreferrer"><span
                                className="fab fa-facebook-square"></span></a></h4>
                            <div className="contenido">
                                <a href="https://www.facebook.com/AgenciaDeTurismo/" target="_blank" rel="noopener noreferrer">/Agencia</a>
                            </div>
                        </li>

                        <li style={{ background: "#FD1D1D" }}>
                            <h4><a href="https://www.instagram.com/AgenciaDeTurismo" target="_blank" rel="noopener noreferrer"> <span
                                className="fab fa-instagram"></span> </a> </h4>
                            <div className="contenido">
                                <a href="https://www.instagram.com/AgenciaDeTurismo/" target="_blank" rel="noopener noreferrer">/Agencia</a>
                            </div>
                        </li>

                        <li style={{ background: "#4989f4" }}>
                            <h4><a href="https://www.google.com/maps?cid=11111111111111" target="_blank" rel="noopener noreferrer">
                                <img src={require(`../assets/img/gmaps.png`)} alt="Agencia de Turismo en Google Maps"
                                    title="Agencia de Turismo en Google Maps" />
                            </a> </h4>
                            <div className="contenido">
                                <a href="https://www.google.com/maps?cid=11111111111111" target="_blank" rel="noopener noreferrer">/Agencia</a>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                    <a href="#0" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-default btn-md">
                        <span>Consultá un asesor</span>
                    </a>
                </div>

            </div>

        </>

    )
}

export default AboutUs