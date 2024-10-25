
import React, { useState, useContext, useEffect } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, cart } = useContext(CartContext); // Acceder al carrito desde el contexto
  const navigate = useNavigate();
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    addItem({ ...item, quantity });
  };

  const buyNow = () => {
    // Verificar si el producto ya está en el carrito
    const isInCart = cart.find(cartItem => cartItem.id === item.id);
    if (!isInCart) {
      addItem({ ...item, quantity: 1 }); // Si no está en el carrito, agregar con cantidad 1
    }
    navigate('/carrito'); // Redirigir al carrito
  };

  // Función para obtener productos aleatorios
  const fetchRandomProducts = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Filtrar para excluir el producto actual y seleccionar 3 aleatorios
    const filteredProducts = productList.filter(prod => prod.id !== item.id);
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    setRecommendedProducts(shuffled.slice(0, 3));
  };

  useEffect(() => {
    fetchRandomProducts();
  }, [item]);

  return (
    <div className="container">
      <div className="row">
        {/* Columna para la imagen */}
        <div className="col-md-6">
          <img 
            src={item.image} 
            alt={item.name} 
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        {/* Columna para la descripción y acciones */}
        <div className="col-md-6">
          <h3 className="mt-3">{item.name}</h3>
          <p className="text-muted">${item.price}</p>
          <p>{item.description}</p>
          <div className="mt-3">
            <ItemQuantitySelector 
              initial={1} 
              stock={item.stock} 
              onQuantityChange={handleQuantityChange} 
            />
            <div className="mt-3 d-flex align-items-center">
              <button 
                className="btn btn-danger me-2" 
                onClick={buyNow}
              >
                Comprar
              </button>
              <button 
                className="btn btn-outline-dark" 
                onClick={addToCart}
              >
                <i className="bi bi-cart"></i> Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de productos recomendados */}
      <div className="mt-5">
        <h4>Productos Recomendados</h4>
        <div className="row">
          {recommendedProducts.map(recommendedItem => (
            <div key={recommendedItem.id} className="col-md-4">
              <div className="card mb-3">
                <img 
                  src={recommendedItem.image} 
                  alt={recommendedItem.name} 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recommendedItem.name}</h5>
                  <p className="card-text">${recommendedItem.price}</p>
                  <Link to={`/detail/${recommendedItem.id}`} className="btn btn-outline-dark">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
