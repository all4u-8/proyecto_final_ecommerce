
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const { cart, removeItem, updateItemQuantity, clearCart } = useContext(CartContext);

  const handleIncreaseQuantity = (id, currentQuantity) => {
    updateItemQuantity(id, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateItemQuantity(id, currentQuantity - 1);
    }
  };

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="container">
      <h2>Resumen de la compra</h2>
      {cart.map(item => (
        <div key={item.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="img-fluid rounded-start" 
                style={{ height: '200px', objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Precio por unidad: ${item.price}</p>
                <div className="d-flex align-items-center mb-3">
                  <button 
                    className="btn btn-outline-secondary me-2" 
                    onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                  >
                    -
                  </button>
                  <span className="me-2">{item.quantity}</span>
                  <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                  >
                    +
                  </button>
                </div>
                <p className="card-text" style={{ fontWeight: 'bold' }}>
                  Precio total: ${item.price * item.quantity}
                </p>
                <button className="btn btn-outline-danger" onClick={() => removeItem(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-outline-secondary mt-3" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Checkout;
