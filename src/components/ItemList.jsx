import { memo } from 'react'
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import Item from "./Item";


const ItemList = memo(
    ({ packages }) => {

        //Ordeno el listado de paquetes turisticos a partir del campo orden.
        packages.sort(function (a, b) {
            if (a.order > b.order) {
              return 1;
            }
            if (a.order < b.order) {
              return -1;
            }
            return 0;
        });

        const { categoryId } = useParams();

        return (
            <>
                {
                    packages.map((pack) =>

                        categoryId === undefined && (
                            <Item id={pack.id} name={pack.name} image={pack.image} price={pack.price} description={pack.description} />
                        )
                        ||
                        (
                            <ItemCard id={pack.id} name={pack.name} image={pack.imageDescription} price={pack.price} description={pack.description} />
                        )
                    )
                }

            </>
        )
    }, (oldProps, newProps) => oldProps.packages.categoryId !== newProps.packages.categoryId);

export default ItemList;