import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Helmet } from "react-helmet";

function App() {
  return (

    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Agencia de Turismo</title>
        <meta name="keywords" content="agencia,viajes,vacaciones,aereo,bus,argentina,mexico,peru,brasil" />
        <meta name="description"
          content="Destinos nacionales e internacionales. Paquetes turísticos. Vacaciones en Argentina, México, Perú, Brasil" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"></script>
      </Helmet>
      <header class="header">
        <NavBar />
      </header>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ItemListContainer titleItem={'Vieaje a Bariloche'} ></ItemListContainer>
      <ItemListContainer titleItem={'Vieaje a Rosario'} ></ItemListContainer>
    </div>

  );
}

export default App;
