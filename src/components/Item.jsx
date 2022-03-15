

function Item({ name, image, price, description }) {

    return (
        <>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="offers__offerContainer">
                    <h5 class="offers__offerContainer--title">{`${name}`}</h5>
                    <div>
                        <img src={require(`../assets/img/${image}`)} alt='' class="offers__offerContainer--imgPromo" />

                        <p class="offers__offerContainer--text">{description}</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p class="offers__offerContainer--price">$ {price}</p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#myModal"
                                class="btn btn-invert btn-md">
                                <span>Detalle del producto</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;