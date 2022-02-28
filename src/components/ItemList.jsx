import { useState, useEffect } from "react";
import getFetch from "../helpers/getFetch";
import Item from "./Item";

function ItemList({ greeting }) {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((respuesta) => {
                return respuesta
            })
            .then((resp) => setPackages(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <h1>{greeting}</h1>
            {loading ? <h1>Cargando...</h1> :
                packages.map((pack) =>

                    <div key={pack.id}>
                        <Item name={pack.name} image={pack.image} price={pack.price} description={pack.description} />
                    </div>
                )
            }

        </>
    );
};

export default ItemList;