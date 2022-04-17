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

    let name = dataForm.name;
    let surname = dataForm.surname;
    let phone = dataForm.phone;
    let email = dataForm.email;

    //Objeto contacto.
    const contact = new Contact(name, surname, phone, email);

    //Validar info ingresada.
    if (contact.ValidateContact()) {

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
  }

  //Clase contacto.
  class Contact {

    constructor(name, surname, phone, email) {
      this.name = name;
      this.surname = surname;
      this.phone = phone;
      this.email = email;
    }

    //Valido la información ingresada.
    ValidateContact() {

      if (this.name === "") {
        alert("Debe ingresar un Nombre");
        document.getElementById("txtName").focus();
        return false;
      }

      if (this.name.length < 3) {
        alert("El Nombre debe tener por lo menos 3 caracteres");
        document.getElementById("txtName").focus();
        return false;
      }

      if (this.surname === "") {
        alert("Debe ingresar un Apellido");
        document.getElementById("txtSurname").focus();
        return false;
      }

      if (this.surname.length < 3) {
        alert("El Apellido debe tener por lo menos 3 caracteres");
        document.getElementById("txtSurname").focus();
        return false;
      }

      if (this.phone === "") {
        alert("Debe ingresar un Telefono");
        document.getElementById("txtPhone").focus();
        return false;
      }

      if (this.phone.length < 10) {
        alert("El telefono no debe tener menos de 10 numero");
        document.getElementById("txtPhone").focus();
        return false;
      }

      if (this.email === "") {
        alert("Debe ingresar un Email");
        document.getElementById("txtEmail").focus();
        return false;
      }

      if (!this.emailValidation()) {
        alert("Email invalido");
        document.getElementById("txtEmail").focus();
        return false;
      }

      return true;
    }

    emailValidation() {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.email)) {
        return false;
      }
      return true;
    }
  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  function handleKeyPressCharacterOnly(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (!((ASCIICode > 64 && ASCIICode < 91) || (ASCIICode > 96 && ASCIICode < 123) || ASCIICode === 8))
      evt.preventDefault();
  }

  function handleKeyPressNumberOnly(evt) {
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      evt.preventDefault();
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
                <button id="btn-empty" className="btn btn-danger" style={{ fontSize: "1.1rem" }} onClick={emptyCart}>Vaciar Carrito</button>
                <br />
                <br />

                <form onSubmit={generateOrder}>
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
                          onKeyPress={(e) => handleKeyPressCharacterOnly(e)}
                          onChange={handleChange}
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
                          onKeyPress={(e) => handleKeyPressCharacterOnly(e)}
                          onChange={handleChange}
                        />
                      </div>

                    </div>

                    <div class="row mb-4 justify-content-center">

                      <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                        <label class="col-xl-1" for="phone">Telefono:</label>
                      </div>

                      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <input
                          id="txtPhone"
                          type='text'
                          name='phone'
                          class="form-control form-control-sm"
                          placeholder='Telefono'
                          value={dataForm.phone}
                          onKeyPress={(e) => handleKeyPressNumberOnly(e)}
                          onChange={handleChange}
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
                          value={dataForm.email}
                          onChange={handleChange}
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