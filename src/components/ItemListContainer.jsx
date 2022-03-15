import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom"

const onAdd = (cant) => {
    alert(`Se han agregado ${cant}  paquetes turisticos al carrito`);
}

function ItemListContainer() {

    const { categoryId } = useParams();

    return (
        <>
            <main class="main">
                <section class="main--grid">

                    {categoryId === undefined && (
                        <div class="container offers">
                            <h2 class="titles--subtitlesH2">Destacados</h2>
                            <div class="row">

                                <ItemList categoryId={categoryId} />

                            </div>
                        </div>
                    )
                    ||
                    (
                        <div class="container packages">
                            <h2 class="titles--subtitlesH2">Paquetes Locales</h2>
                            <div class="row">

                                <ItemList categoryId={categoryId} />

                            </div>
                        </div>
                    )}

                </section>
            </main>
        </>
    );
};

export default ItemListContainer;