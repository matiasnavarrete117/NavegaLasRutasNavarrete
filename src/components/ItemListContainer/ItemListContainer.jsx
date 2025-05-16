import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let productsCollection = collection(db, 'products');
      let q = productsCollection;

      // Si hay categoría, filtra por categoría
      if (categoryId) {
        q = query(productsCollection, where('category', '==', categoryId));
      }

      const productsSnapshot = await getDocs(q);
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <div className="loader">Cargando productos...</div>;

  return (
    <div className="item-list-container">
      {greeting && <h2 className="greeting">{greeting}</h2>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;