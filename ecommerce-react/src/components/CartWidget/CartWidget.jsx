// src/components/CartWidget/CartWidget.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart, cartQuantity } = useContext(CartContext);

  // Calcular el precio total de los productos en el carrito
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Link to="/carrito" className="nav-link d-flex align-items-center">
      <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}></i>
      {cartQuantity > 0 && (
        <>
          <span className="badge bg-danger ms-2">{cartQuantity}</span>
          <span className="ms-2 text-white">${totalPrice.toFixed(2)}</span> {/* Mostrar el precio total */}
        </>
      )}
    </Link>
  );
};

export default CartWidget;
