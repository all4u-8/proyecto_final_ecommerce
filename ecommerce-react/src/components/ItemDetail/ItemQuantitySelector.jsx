
import React from 'react';

const ItemQuantitySelector = ({ initial, stock, onQuantityChange }) => {
  const [quantity, setQuantity] = React.useState(initial);

  const handleIncrease = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <button 
        className="btn btn-outline-secondary me-2" 
        onClick={handleDecrease}
      >
        -
      </button>
      <span className="me-2" style={{ color: 'black' }}>{quantity}</span> {/* Cambiar a color rojo */}
      <button 
        className="btn btn-outline-secondary" 
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
