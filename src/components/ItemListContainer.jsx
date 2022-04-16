import { useState, useEffect } from "react";
import ItemList from '../components/ItemList';
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

                    {loading ? <h1>Cargando...</h1> :
                        (
                            <div className={`container ${categoryId === undefined ? "offers" : "packages"}`}>
                                <h2 className="titles--subtitlesH2">{renderTitle(categoryId)}</h2>
                                {categoryId !== undefined ? <h3 className="titles--subtitlesH3" id="title2">{renderSubtitle(categoryId)}</h3> : ""}

                                {categoryId !== undefined ?
                                    <div className="row" style={{ margin: "3%" }}>
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <ul className="acordeon">
                                                <li style={{ background: "#3b5998" }}>
                                                    <h4><a href="https://www.facebook.com/AgenciaDeTurismo/" target="_blank" rel="noopener noreferrer"><span
                                                        className="fab fa-facebook-square"></span></a></h4>
                                                    <div className="contenido">
                                                        <a href="https://www.facebook.com/AgenciaDeTurismo/" target="_blank" rel="noopener noreferrer">/Agencia</a>
                                                    </div>
                                                </li>

                                                <li style={{ background: "#FD1D1D" }}>
                                                    <h4><a href="https://www.instagram.com/AgenciaDeTurismo" target="_blank" rel="noopener noreferrer"> <span
                                                        className="fab fa-instagram"></span> </a> </h4>
                                                    <div className="contenido">
                                                        <a href="https://www.instagram.com/AgenciaDeTurismo/" target="_blank" rel="noopener noreferrer">/Agencia</a>
                                                    </div>
                                                </li>

                                                <li style={{ background: "#4989f4" }}>
                                                    <h4><a href="https://www.google.com/maps?cid=11111111111111" target="_blank" rel="noopener noreferrer">
                                                        <img src={require(`../assets/img/gmaps.png`)} alt="Agencia de Turismo en Google Maps"
                                                            title="Agencia de Turismo en Google Maps" />
                                                    </a> </h4>
                                                    <div className="contenido">
                                                        <a href="https://www.google.com/maps?cid=11111111111111" target="_blank" rel="noopener noreferrer">/Agencia</a>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                            <a href="#0" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-default btn-md">
                                                <span>Consultá un asesor</span>
                                            </a>
                                        </div>

                                    </div> : ""}

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