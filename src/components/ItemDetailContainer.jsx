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

    }, []);

    return (
        <>
            <main class="main">
                <section class="main--grid">
                    {loading ?
                        <div class="loader-wrapper loader-wrapper--9">
                            <div class="loader loader--9">
                                <div class="square"></div>
                                <div class="square"></div>
                                <div class="square"></div>
                                <div class="square"></div>
                                <div class="square"></div>
                                <div class="square"></div>
                            </div>
                        </div> :
                        <ItemDetail pack={pack}></ItemDetail>
                    }
                </section>
            </main>

        </>
    );
};

export default ItemDetailContainer
