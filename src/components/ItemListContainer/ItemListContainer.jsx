import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/products';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    
    getProducts()
      .then(items => {
        if (categoryId) {
          // Productos por categoría con categoryId
          const filtered = items.filter(
            product => product.category === categoryId
          );
          setProducts(filtered);
        } else {
          // Muestra todos los productos
          setProducts(items);
        }
      })
      .catch(error => console.error("Error cargando productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]); // Re-ejecuta cuando cambia la categoría

  return (
    <div className="item-list-container">
      {greeting && <h2 className="greeting">{greeting}</h2>}
      <h2 className="category-title">
        {categoryId 
          ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}` 
          : 'Todos nuestros productos'}
      </h2>
      
      {loading ? (
        <div className="loader">Cargando productos...</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;