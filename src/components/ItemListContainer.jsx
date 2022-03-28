import { useState, useEffect } from "react";
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom";
import { query, where, getDocs, collection, getFirestore } from "firebase/firestore"

function ItemListContainer({ greeting }) {

    const { categoryId } = useParams();

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let catergory = categoryId !== undefined ? categoryId : "offers";

        const db = getFirestore();
        const queryColection = collection(db, 'Packages');

        const queryFilter = query(queryColection, where('categoryId', '==', catergory));
        getDocs(queryFilter)
            .then(resp => setPackages(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }, [categoryId]);

    return (
        <>
            <main class="main">
                <section class="main--grid">
                    <h1>{greeting}</h1>

                    {loading ? <h1>Cargando...</h1> :
                        categoryId === undefined && (

                            <div class="container offers">
                                <h2 class="titles--subtitlesH2">Destacados</h2>
                                <div class="row">

                                    <ItemList packages={packages} />

                                </div>
                            </div>
                        )
                        ||
                        (
                            <div class="container packages">
                                <h2 class="titles--subtitlesH2">Paquetes Locales</h2>
                                <div class="row">

                                    <ItemList packages={packages} />

                                </div>
                            </div>
                        )}

                </section>
            </main>
        </>
    );
};

export default ItemListContainer;