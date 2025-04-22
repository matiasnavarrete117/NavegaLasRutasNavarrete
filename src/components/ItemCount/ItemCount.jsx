import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
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
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      
      <button 
        className="add-to-cart-button"
        onClick={() => onAdd(count)}
        disabled={!stock}
      >
        {stock ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
};

export default ItemCount;