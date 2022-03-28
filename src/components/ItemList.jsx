import { memo } from 'react'
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import Item from "./Item";

const ItemList = memo(
    ({ packages }) => {

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