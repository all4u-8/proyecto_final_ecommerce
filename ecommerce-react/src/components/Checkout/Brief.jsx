
import React from 'react';

const Brief = ({ cart }) => {
  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h5>{item.name}</h5>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio total: ${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Brief;
