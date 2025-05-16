import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import './ItemCount.css';

const ItemCount = ({ initial = 1, stock, onAdd, productId }) => {
  const [count, setCount] = useState(initial);
  const { cartItems } = useCart();
  const [availableStock, setAvailableStock] = useState(stock);
  
  // Stock disponible real (stock total - cantidad en carrito)
  useEffect(() => {
    const itemInCart = cartItems.find(item => item.id === productId);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;
    setAvailableStock(stock - quantityInCart);
  }, [cartItems, productId, stock]);
  
  const increment = () => {
    if (count < availableStock) {
      setCount(count + 1);
    }
  };
  
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button 
          className="count-button" 
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="count-number">{count}</span>
        <button 
          className="count-button" 
          onClick={increment}
          disabled={count >= availableStock}
        >
          +
        </button>
      </div>
      
      <button 
        className="add-to-cart-button"
        onClick={() => onAdd(count)}
        disabled={availableStock <= 0}
      >
        {availableStock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
      
      {availableStock > 0 && availableStock < 5 && (
        <p className="stock-warning">¡Solo quedan {availableStock} unidades!</p>
      )}
    </div>
  );
};

export default ItemCount;