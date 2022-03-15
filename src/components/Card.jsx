
const Card = ({name, price, image, description}) => {
    return (
        <>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="card">
                    <span class={`packages--img packages--${image} card-img-top`} role="img"
                        alt="Paquete turistico"></span>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <p><b>Precio: $ {price.toLocaleString('es-es')}</b></p>
                        <button offerid="11" class="btn btn-invert btn-md btnAddOffer">Detalle del producto</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;