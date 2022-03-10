import { useEffect, useState } from 'react';
import getFetch from "../helpers/getFetch";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then(resp => setPackages(resp.find(prod => prod.id === 1)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [])

    return (
        <>
            {loading ? <h1>Cargando...</h1> :
                <ItemDetail product={packages}></ItemDetail>
            }
        </>
    )
}

export default ItemDetailContainer
