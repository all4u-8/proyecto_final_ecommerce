
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const AddItemButton = ({ item, quantity }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem({ ...item, quantity });
  };

  return (
    <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
      Añadir al carrito
    </button>
  );
};

export default AddItemButton;
