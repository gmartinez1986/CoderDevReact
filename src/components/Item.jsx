

function Item({ name, image, price, description }) {

    return (
        <>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4">
                <div className="card w-100 mt-5" >

                    <div className="card-header">
                        {`${name}`}
                    </div>

                    <div className="card-body">
                        <img src={require(`../assets/img/${image}`)} alt='' className='w-50' />
                        <br />
                        $ {price}
                        <p>{description}</p>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Item;