import { useCartContext } from "../context/CartContext"

function CartWithItems() {

  const { cartList, emptyCart, totalPrice, removeItem } = useCartContext();

  return (

    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <b>Cart</b>
      <br />
      {cartList.map(item =>
        <li>
          <b>Nombre:  </b>   {item.name};
          <b>Precio:  </b> $ {item.price.toLocaleString('es-es')};
          <b>Cantidad:</b>   {item.cantidad}
          <button onClick={() => removeItem(item.id)}>Elminar item</button>
        </li>)}
      <br />
      <button onClick={emptyCart}>Vaciar CarrIto</button>
      <br />
      <br />
      <b>Precio total:</b> {`$ ${totalPrice()}`}
      <br />
      <br />
      <br />
    </>
  )
}

export default CartWithItems