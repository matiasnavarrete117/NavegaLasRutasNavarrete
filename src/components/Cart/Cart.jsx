import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Función para navegar al checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="continue-shopping">Volver a la tienda</Link>
      </div>
    );
  }
  
  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      
      {/* Lista de productos en el carrito */}
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            {/* Detalles del producto */}
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Precio: ${item.price.toLocaleString()}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toLocaleString()}</p>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Añade este bloque al final del componente */}
      <div className="cart-summary">
        <h3>Total: ${total.toLocaleString()}</h3>
        <button 
          onClick={handleCheckout}
          className="checkout-button"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;