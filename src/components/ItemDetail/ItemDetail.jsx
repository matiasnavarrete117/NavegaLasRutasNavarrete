import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  
  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
    console.log(`Se agregaron ${quantity} unidades de ${product.title} al carrito`);
    // En próximas entregas, aquí conectarás con el contexto del carrito
  };

  if (!product) return null;

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