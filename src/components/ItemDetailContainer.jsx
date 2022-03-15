import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import getFetch from "../helpers/getFetch";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    const { detailId } = useParams();

    useEffect(() => {
        getFetch
            .then(resp => setPackages(resp.find(prod => prod.id == detailId)))
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
