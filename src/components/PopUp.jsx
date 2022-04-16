

function PopUp() {

    return (
        <>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title col-11 text-center">Consultá un Asesor</h5>
                            <button type="button text-right" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="modal--panel modal--panel-default">
                                <div className="modal--panel-heading">
                                    <h5 className="modal--panel-heading-title col-11 text-center">
                                        <i className="fa fa-users"></i>
                                        Consultanos
                                    </h5>
                                </div>

                                <div className="modal__panel-body">

                                    <div className="row modal__panel-body--row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <h5>Consultas WhatsApp</h5>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <h5>Consultas Facebook</h5>
                                        </div>
                                    </div>

                                    <div className="row modal__panel-body--row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <a className="page-scroll btn btn-invert btn-sm" href="https://wa.me/123456789"
                                                target="_blank" rel="noopener noreferrer">Contactar en WhatsApp</a>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <a className="page-scroll btn btn-invert btn-sm" href="http://m.me/agencia"
                                                target="_blank" rel="noopener noreferrer">Contactar en Facebook</a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <h5>Consultas en Instagram</h5>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <h5>Consultas por Email</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <a className="page-scroll btn btn-invert btn-sm" href="https://www.instagram.com/agencia/"
                                                target="_blank" rel="noopener noreferrer">Contactar en
                                                Instagram</a>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center">
                                            <a className="page-scroll btn btn-invert btn-sm" href="mailto:agencia@gmail.com"
                                                target="_blank" rel="noopener noreferrer">Contactar por Email</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="modal--panel-heading">
                                    <h5 className="modal--panel-heading-title col-11 text-center">
                                        <i className="fa fa-users"></i>
                                        Nuestra Oficina
                                    </h5>
                                </div>

                                <div className="modal__panel-body">
                                    <div className="row modal__panel-body--row">
                                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 col-11 text-center">
                                            <h5><b>Horarios de Atención</b></h5>
                                        </div>
                                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 col-11 text-center">
                                            <h6>Lunes a Viernes de 9 a 18hs</h6>
                                        </div>
                                    </div>

                                    <div className="row modal__panel-body--row">
                                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 col-11 text-center">
                                            <i className="fa fa-phone"></i>
                                            <span><a className="modal__panel-body--phone" href="tel:123456789">123456789</a></span>
                                        </div>
                                    </div>

                                    <div className="row modal__panel-body--row">
                                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 col-11 text-center">
                                            <h5><b>Agencia de Turismo</b></h5>
                                        </div>
                                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 col-11 text-center">
                                            <h6>Calle 1234 Piso 1A CABA</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopUp