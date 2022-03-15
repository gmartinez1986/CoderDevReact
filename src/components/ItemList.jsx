import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import getFetch from "../helpers/getFetch";
import Item from "./Item";

function ItemList({ greeting }) {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {

        if (categoryId) {
            getFetch
                .then((respuesta) => {
                    return respuesta
                })
                .then((resp) => setPackages(resp.filter(pro => pro.categoryId == categoryId)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch
                .then((respuesta) => {
                    return respuesta
                })
                .then((resp) => setPackages(resp.filter(pro => pro.categoryId == "offers")))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }

    }, [categoryId]);

    return (
        <>
            <h1>{greeting}</h1>
            {loading ? <h1>Cargando...</h1> :
                packages.map((pack) =>

                    <Item idPack={pack.id} name={pack.name} image={pack.image} price={pack.price} description={pack.description} />

                )
            }

        </>
    );
};

export default ItemList;