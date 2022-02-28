
import ItemCount from '../components/ItemCount';

const onAdd = (cant) => {
    alert(`Se han agregado ${cant}  paquetes turisticos al carrito`);
 }

const ItemListContainer = (prop) => {
    return (
        
        <>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>

    );
};

export default ItemListContainer;