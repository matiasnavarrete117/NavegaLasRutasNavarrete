import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../services/products';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    
    // Simulación de llamada a API con Promise
    getProductById(parseInt(id))
      .then(item => {
        if (item) {
          setProduct(item);
        } else {
          // Si no se encuentra el producto, redirigir a 404
          navigate('/not-found');
        }
      })
      .catch(error => {
        console.error("Error cargando detalles:", error);
        navigate('/not-found');
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loader">Cargando detalles del producto...</div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;