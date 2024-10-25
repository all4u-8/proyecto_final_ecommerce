
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [featuredItem, setFeaturedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        let q = collection(db, 'products');
        if (categoriaId) {
          q = query(q, where('category', '==', categoriaId));
        }
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(products);

        // Seleccionar un producto aleatorio como destacado
        if (products.length > 0) {
          const randomIndex = Math.floor(Math.random() * products.length);
          setFeaturedItem(products[randomIndex]);
        }
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoriaId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container">
      {featuredItem && (
        <div className="mb-4">
          <h2></h2>
          <div className="card featured-card">
            <Link to={`/detail/${featuredItem.id}`}>
              <img 
                src={featuredItem.image} 
                className="card-img-top" 
                alt={featuredItem.name} 
                style={{ height: '400px', objectFit: 'contain' }} // Envolver la imagen en un enlace
              />
            </Link>
            <div className="card-body">
              <h3 className="card-title">{featuredItem.name}</h3>
              <p className="card-text" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff' }}>
                ${featuredItem.price}
              </p>
              <p className="card-text">{featuredItem.description}</p>
            </div>
          </div>
        </div>
      )}
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : 'Catálogo de Productos'}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
