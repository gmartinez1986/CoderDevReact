import { useState, useContext, createContext } from 'react';

const cartContext = createContext([]);

export function useCartContext() {
    return useContext(cartContext);
}

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    function addToCart(items) {

        //Si no se encuentra valor index = -1.
        const index = cartList.findIndex(i => i.id === items.id)

        if (index > -1) {

            const qtyOld = cartList[index].cantidad;

            let qtyNew = qtyOld + items.cantidad;

            cartList[index].cantidad = qtyNew;

            let arrAux = [...cartList];

            setCartList(arrAux);

        } else {

            setCartList([...cartList, items]);

        }
    }

    const totalPrice = () => {

        return cartList.reduce((acum, item) => (acum + (item.cantidad * item.price)), 0).toLocaleString('es-es');

    }

    const removeItem = (id) => {

        setCartList(cartList.filter(prod => prod.id !== id));

    }

    const quantityItem = () => {

        return cartList.reduce((acum, item) => acum = acum + item.cantidad, 0);

    }

    function emptyCart() {

        setCartList([]);

    }

    const reduceQuantityItem = (item) => {

        const index = cartList.findIndex(i => i.id === item.id)

        const qtyOld = cartList[index].cantidad;

        let qtyNew = qtyOld - 1;

        if (qtyNew > 0) {

            cartList[index].cantidad = qtyNew;

            let arrAux = [...cartList];

            setCartList(arrAux);

        } else {

            removeItem(item.id);

        }

    }

    const increaseQuantityItem = (item) => {

        const index = cartList.findIndex(i => i.id === item.id)

        const qtyOld = cartList[index].cantidad;

        let qtyNew = qtyOld + 1;

        cartList[index].cantidad = qtyNew;

        let arrAux = [...cartList];

        setCartList(arrAux);

    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            removeItem,
            quantityItem,
            reduceQuantityItem,
            increaseQuantityItem
        }} >
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider