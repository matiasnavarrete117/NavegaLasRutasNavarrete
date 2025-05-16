import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addToCart, cartItems } = useCart();
  
  const handleAddToCart = (count) => {
    // Verificar que hay suficiente stock
    const itemInCart = cartItems.find(item => item.id === product.id);
    const currentInCart = itemInCart ? itemInCart.quantity : 0;
    
    if (currentInCart + count > product.stock) {
      alert(`Solo puedes agregar ${product.stock - currentInCart} unidades más de este producto.`);
      return;
    }
    
    addToCart(product, count);
    setQuantityAdded(count);
  };

  if (!product) return null;

  // Corregido: usar el id del producto directamente
  console.log("ID del producto obtenido:", product.id);
  console.log("Producto obtenido:", product);

  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-title">{product.title}</h2>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-category">Categoría: {product.category}</p>
        <p className="item-detail-price">${product.price.toLocaleString()}</p>
        
        <div className="item-detail-actions">
          <ItemCount 
            initial={1} 
            stock={product.stock} 
            onAdd={handleAddToCart} 
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;