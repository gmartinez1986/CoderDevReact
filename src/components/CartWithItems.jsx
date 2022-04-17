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
    order.date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
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
      <main className="main">
        <h2 className="titles--subtitlesH2" id="title1">Su selección</h2>
        <section className="main--grid">
          <div className="container">
            <div className="row" style={{ justifyContent: "center", minHeight: "60vh", position: "sticky" }}>
              <h3 className="titles--subtitlesH3" id="title2">Carrito</h3>
              <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12">
                <ul id="cart" className="list-group">
                  {cartList.map(item =>

                    <li className="list-group-item text-right mx-2" style={{ background: "rgb(4, 48, 95)", color: "white", fontSize: "1.1rem" }}>
                      {item.cantidad} x {item.name} - $ {item.price.toLocaleString('es-es')}
                      <button class="btn btn-danger" title="Reducir ítem" data-item="1" style={{ margin: "0.5rem", marginLeft: "5rem" }} onClick={() => reduceQuantityItem(item)}>-</button>
                      <button class="btn btn-success" title="Añadir ítem" data-item="1" style={{ margin: "0.5rem" }} onClick={() => increaseQuantityItem(item)}>+</button>
                      <button class="btn btn-danger" title="Elminar ítem" data-item="1" style={{ margin: "0.5rem" }} onClick={() => removeItem(item.id)}>X</button>
                    </li>

                  )}
                </ul>
              </div>
              <p className="text-center" style={{ color: "white", fontSize: "1.2rem" }}>Total: $ <span
                id="total">{`${totalPrice()}`}</span>
              </p>
              <div className="text-center">
                <button id="btn-empty" className="btn btn-danger" style={{ fontSize: "1.1rem" }}>Vaciar Carrito</button>
                <br />
                <br />

                <form action="" method="GET" id="frmContact">
                  <fieldset class="container cart__formulario">

                    <div class="row mb-4 justify-content-center">

                      <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                        <label class="col-xl-1" for="nombre">Nombre:</label>
                      </div>

                      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <input
                          id="txtName"
                          type='text'
                          name='name'
                          class="form-control form-control-sm"
                          placeholder='Nombre'
                          value={dataForm.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                    </div>

                    <div class="row mb-4 justify-content-center">

                      <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                        <label class="col-xl-1" for="apellido">Apellido:</label>
                      </div>

                      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <input
                          id="txtSurname"
                          type='text'
                          name='surname'
                          class="form-control form-control-sm"
                          placeholder='Apellido'
                          value={dataForm.surname}
                          onChange={handleChange}
                          required
                        />
                      </div>

                    </div>

                    <div class="row mb-4 justify-content-center">

                      <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                        <label class="col-xl-1" for="email">Email:</label>
                      </div>

                      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <input
                          id="txtEmail"
                          type='text'
                          name='email'
                          class="form-control form-control-sm"
                          placeholder='Email'
                          required
                        />
                      </div>

                    </div>

                    <div class="row mb-4">
                      <div class="form-group">
                      </div>
                    </div>

                    <button id="btn-buy" className="btn btn-success" style={{ fontSize: "1.1rem" }}>Terminar Compra</button>

                  </fieldset>
                </form>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default CartWithItems