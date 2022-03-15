import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card  from "./Card";
import getFetch from "../helpers/getFetch";
import Item from "./Item";

function ItemList({ greeting }) {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {

        if (categoryId) {
            getFetch
                .then((response) => {
                    return response
                })
                .then((resp) => setPackages(resp.filter(pro => pro.categoryId === categoryId)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch
                .then((response) => {
                    return response
                })
                .then((resp) => setPackages(resp.filter(pro => pro.categoryId === "offers")))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }

    }, [categoryId]);

    return (
        <>
            <h1>{greeting}</h1>
            {loading ? <h1>Cargando...</h1> :
                packages.map((pack) =>

                    categoryId === undefined && (
                        <Item idPack={pack.id} name={pack.name} image={pack.image} price={pack.price} description={pack.description} />
                    ) 
                    ||
                    (
                        <Card idPack={pack.id} name={pack.name} image={pack.imageDescription} price={pack.price} description={pack.description}/>
                    )
                )
            }

        </>
    );
};

export default ItemList;