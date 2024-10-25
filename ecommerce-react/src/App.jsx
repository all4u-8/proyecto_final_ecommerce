
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './context/CartContext'; // Importar el proveedor del contexto
import './App.css'; // Importar el archivo CSS para aplicar los estilos

const App = () => {
  return (
    <CartProvider> {/* Envolver la aplicación con el CartProvider */}
      <Router>
        <div className="app-container"> {/* Div para aplicar estilos generales */}
          <NavBar />
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Checkout />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
