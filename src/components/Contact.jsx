
import { useState } from "react";

function Contact() {

    const initialState = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        newsletter: true,
        comments: ''
    };

    const [dataForm, setDataForm] = useState(initialState);

    //Esta función se utiliza en evento "onkeypress".
    //En los input de tipo text para que el usuario solo ingrese caracteres.
    function handleKeyPressCharacterOnly(evt) {
        let ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (!((ASCIICode > 64 && ASCIICode < 91) || (ASCIICode > 96 && ASCIICode < 123) || ASCIICode === 8))
            evt.preventDefault();
    }

    //Esta función se utiliza en evento "onkeypress". 
    //En los input de tipo text para que el usuario solo ingrese numeros.
    function handleKeyPressNumberOnly(evt) {
        let ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            evt.preventDefault();
    }

    function sendContact() {

        let name = dataForm.name;
        let surname = dataForm.surname;
        let email = dataForm.email;
        let phone = dataForm.phone;
        let newsLetter = dataForm.newsletter;
        let comments = dataForm.comments;

        //Objeto contacto.
        const contact = new Contact(name, surname, email, phone, newsLetter, comments);

        //Validar info ingresada.
        if (contact.ValidateContact()) {

            //Hago una llamada GET utilizando AJAX, para obtener los personajes de Harry Potter.
            /*  $.ajax({
                  method: "GET",
                  url: "http://hp-api.herokuapp.com/api/characters",
                  success: function (res) {
  
                      $('#frmContact').trigger("reset");
                      //Tomo el nombre del primer personaje.
                      alert(`Se envió la información, ${res[0].name} te agradece.`);
                  }
              });*/
        }
    }

    //Clase contacto.
    class Contact {

        constructor(name, surname, email, phone, newsLetter, comments) {
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.newsLetter = newsLetter;
            this.comments = comments;
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
                document.getElementById("txtName").focus();
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

    const clearState = () => {
        setDataForm({ ...initialState });
    }

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeChecked = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.checked
        })
    }

    return (
        <>
            <main class="contact">
                <h2 class="titles--subtitlesH2">Contacto</h2>
                <form action="" method="GET" id="frmContact">
                    <fieldset class="container contact__formulario">

                        <div class="row mb-4 justify-content-center">

                            <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                                <label for="nombre">Nombre:</label>
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
                                    required
                                />
                            </div>

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
                                    value={dataForm.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                                <label class="col-xl-1" for="telefono">Telefono:</label>
                            </div>

                            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <input
                                    id="txtPhone"
                                    type='text'
                                    name='phone'
                                    maxlength="14"
                                    class="form-control form-control-sm"
                                    placeholder='Telefono'
                                    value={dataForm.phone}
                                    onKeyPress={(e) => handleKeyPressNumberOnly(e)}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div class="row mb-4">
                            <div class="form-group">
                                <input
                                    type='checkbox'
                                    name='newsletter'
                                    checked={dataForm.newsletter}
                                    onChange={handleChangeChecked}
                                />
                                <label for="newsletter">¿Desea recibir nuestro Newsletter?</label>
                            </div>
                        </div>

                        <div class="row mb-4 justify-content-center">
                            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 form-group">
                                <label for="comentarios">Comentarios</label>
                                <textarea
                                    class="form-control"
                                    name='comments'
                                    rows="5"
                                    value={dataForm.comments}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div class="row mb-4">
                            <div class="form-group">
                                <input type="button" onClick={() => sendContact()} value="Enviar" />
                                <input type="reset" onClick={() => clearState()} value="Reset" />
                            </div>
                        </div>

                    </fieldset>
                </form>
            </main>
        </>
    )

}

export default Contact