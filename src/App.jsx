import './styles/main.css';
import './styles/font-awesome.css';
import './styles/font-google.css';
import './styles/css/bootstrap.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Destinations from './components/Destinations';
import Offers from './components/Offers';
import Contact from './components/Contact';

import './App.css';
import CartContextProvider from './context/CartContext';

function App() {
  return (

    <>
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

      <CartContextProvider>
        <BrowserRouter>
          <header className="header">
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Destinations' element={<Destinations />} />
            <Route path='/Offers' element={<Offers />} />
            <Route path='/Contact' element={<Contact />} />

            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>

      <Footer />
    </>

  );
}

export default App;
