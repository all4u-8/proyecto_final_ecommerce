
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true); // Mostrar la animación de carga al comenzar la petición
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('No se encontró el producto.');
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false); // Ocultar la animación de carga una vez que los datos se han cargado
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />; // Mostrar la animación de carga mientras se obtienen los datos
  }

  return (
    <div className="container">
      {item ? <ItemDetail item={item} /> : <p>Producto no encontrado.</p>}
    </div>
  );
};

export default ItemDetailContainer;
