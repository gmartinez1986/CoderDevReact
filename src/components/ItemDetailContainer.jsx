import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [pack, setPackage] = useState([]);
    const [loading, setLoading] = useState(true);

    const { detailId } = useParams();

    useEffect(() => {

        const db = getFirestore();
        const queryDb = doc(db, 'Packages', detailId);
        getDoc(queryDb)
            .then(resp => setPackage({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [])

    return (
        <>
            {loading ? <div class="loading loader">Cargango...</div> :
                <ItemDetail pack={pack}></ItemDetail>
            }
        </>
    )
}

export default ItemDetailContainer
