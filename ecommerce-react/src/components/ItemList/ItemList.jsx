
import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="row">
      {items.map(item => (
        <div className="col-md-4" key={item.id}>
          <div className="card">
            <Link to={`/detail/${item.id}`}>
              <img 
                src={item.image} 
                className="card-img-top" 
                alt={item.name} 
                style={{ height: '200px', objectFit: 'contain' }}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">${item.price}</p>
              <Link to={`/detail/${item.id}`} className="btn btn-outline-dark">Ver detalles</Link> {/* Actualizado */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
