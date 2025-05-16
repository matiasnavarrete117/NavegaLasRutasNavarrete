import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Depuración de la redirección
  console.log("Ruta actual:", location.pathname);
  console.log("ID del producto desde params:", itemId);
  console.log("itemId recibido:", itemId);

  useEffect(() => {
    setLoading(true);
    
    if (!itemId) {
      console.error("ID no válido en la URL");
      return;
    }

    console.log("Intentando obtener producto con ID:", itemId, "tipo:", typeof itemId);

    const getProduct = async () => {
      try {
        console.log("Buscando en Firestore - colección:", "products", "ID:", itemId);
        
        const productRef = doc(db, 'products', itemId);
        console.log("Referencia creada:", productRef);
        
        const productSnap = await getDoc(productRef);
        console.log("Documento existe:", productSnap.exists(), "Datos:", productSnap.data());
        
        if (productSnap.exists()) {
          const productData = { id: productSnap.id, ...productSnap.data() };
          console.log("Producto encontrado:", productData);
          setProduct(productData);
        } else {
          console.error("No se encontró el producto con ID:", itemId);
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };
    
    getProduct();
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loader">Cargando producto...</div>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <div className="error-container">No se encontró el producto</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;