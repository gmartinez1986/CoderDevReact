import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import {
  addDoc,
  collection,
  getFirestore
} from "firebase/firestore"


function CartWithItems() {

  const [dataForm, setDataForm] = useState({
    email: '', name: '', phone: ''
  });

  const { cartList, emptyCart, totalPrice, removeItem, reduceQuantityItem, increaseQuantityItem } = useCartContext();

  const generateOrder = async (e) => {

    e.preventDefault();

    const current = new Date();

    let order = {}

    order.buyer = dataForm;
    order.date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    order.total = totalPrice();

    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.cantidad;

      return { id, name, price }
    });

    const db = getFirestore();
    const queryCollectionSet = collection(db, 'orders');
    addDoc(queryCollectionSet, order)
      .then(resp => alert("Gracias por su compra " + order.buyer.name + ", su Nro de Orden es: " + resp.id))
      .catch(err => console.error(err))
      .finally(() => emptyCart());

  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

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
          <button onClick={() => reduceQuantityItem(item)}>-</button>
          <button onClick={() => increaseQuantityItem(item)}>+</button>
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
      <form
        onSubmit={generateOrder}
      >
        <input
          type='text'
          name='name'
          placeholder='name'
          value={dataForm.name}
          onChange={handleChange}
          required
        /><br />
        <input
          type='text'
          name='phone'
          placeholder='tel'
          value={dataForm.phone}
          onChange={handleChange}
          required
        /><br />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={dataForm.email}
          onChange={handleChange}
          required
        /><br />
        <br />
        <button>Terminar Compra</button>
      </form>
      <br />
      <br />
    </>
  )
}

export default CartWithItems