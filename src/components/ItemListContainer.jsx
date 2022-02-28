import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';

const onAdd = (cant) => {
    alert(`Se han agregado ${cant}  paquetes turisticos al carrito`);
}

function ItemListContainer() {

    return (
        <>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />

            <ItemList/>
        </>
    );
};

export default ItemListContainer;