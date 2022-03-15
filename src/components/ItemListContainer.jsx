import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom"

const onAdd = (cant) => {
    alert(`Se han agregado ${cant}  paquetes turisticos al carrito`);
}

function ItemListContainer() {

    const {categoryId} = useParams();

    return (
        <>
            <main class="main">
                <section class="main--grid">

                    <div class="container offers">
                        <h2 class="titles--subtitlesH2">Destacados</h2>
                        <div class="row">

                            <ItemList categoryId={categoryId} />

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ItemListContainer;