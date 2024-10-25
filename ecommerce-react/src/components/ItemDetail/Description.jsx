
import React from 'react';

const Description = ({ text }) => {
  return (
    <div className="description mt-3">
      <h5>Descripción del producto</h5>
      <p>{text}</p>
    </div>
  );
};

export default Description;
