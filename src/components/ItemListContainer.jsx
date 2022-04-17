import { useState, useEffect } from "react";
import ItemList from '../components/ItemList';
import AboutUs from '../components/AboutUs';
import PopUp from '../components/PopUp';
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

    function renderTitle(param) {
        switch (param) {
            case undefined:
                return 'Destacados';
            case 'argentina':
                return 'Paquetes Locales';
            default:
                return 'Paquetes Internacionales';
        }
    }

    function renderSubtitle(param) {
        switch (param) {
            case 'argentina':
                return 'Argentina';
            case 'caribe':
                return 'Caribe';
            case 'brasil':
                return 'Brasil';
            case 'europe':
                return 'Europa';
            case 'exotic':
                return 'Exótico';
            default:
                return '';
        }
    }

    return (
        <>
            <main class="main">
                <section class="main--grid">
                    <h1>{greeting}</h1>
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
                        (
                            <div className={`container ${categoryId === undefined ? "offers" : "packages"}`}>
                                <h2 className="titles--subtitlesH2">{renderTitle(categoryId)}</h2>
                                {categoryId !== undefined ?
                                    <h3 className="titles--subtitlesH3" id="title2">{renderSubtitle(categoryId)}</h3> : ""}

                                {categoryId !== undefined ?
                                    <AboutUs /> : ""}

                                <div className="row">

                                    <ItemList packages={packages} />

                                </div>
                            </div>
                        )
                    }

                </section>
            </main>
            <PopUp />
        </>

    );
};

export default ItemListContainer;