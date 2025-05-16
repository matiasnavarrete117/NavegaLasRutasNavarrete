import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartQuantity } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });
  
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.email !== formData.confirmEmail) {
      alert('Los emails no coinciden');
      return;
    }
    
    setLoading(true);
    
    try {
      const order = {
        buyer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        },
        items: cartItems.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity
        })),
        total,
        date: Timestamp.fromDate(new Date())
      };
      
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
    } catch (error) {
      console.error('Error al crear la orden:', error);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return <h2>Procesando tu orden...</h2>;
  }
  
  if (orderId) {
    return (
      <div className="order-confirmation">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }
  
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Nombre completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Confirmar Email</label>
          <input
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-order">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;