import { useCartContext } from "../context/CartContext"

function Cart() {
  const { cartList, emptyCart } = useCartContext()
  console.log(cartList)
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <b>Cart</b>
      <br />
      {cartList.map(item => <li><b>Nombre:</b> {item.name};
                                <b>Precio:</b> {item.price.toLocaleString('es-es')};
                                <b>Cantidad:</b> {item.cantidad}</li>)}
      <br />
      <button onClick={emptyCart}>Vaciar CarrIto</button>
    </div>
  )
}

export default Cart