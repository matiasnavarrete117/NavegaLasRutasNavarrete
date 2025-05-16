import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (item, quantity) => {
        // Verificar si hay suficiente stock disponible
        if (quantity <= 0) return;
        
        const existingItemIndex = cartItems.findIndex(
            cartItem => cartItem.id === item.id
        );
        
        if (existingItemIndex !== -1) {
            // El producto ya está en el carrito
            const updatedItems = [...cartItems];
            const currentQuantity = updatedItems[existingItemIndex].quantity;
            
            // Verificar que no exceda el stock
            if (currentQuantity + quantity > item.stock) {
                alert(`No hay suficiente stock disponible. Stock máximo: ${item.stock}`);
                return;
            }
            
            updatedItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedItems);
        } else {
            // Nuevo producto en el carrito
            if (quantity > item.stock) {
                alert(`No hay suficiente stock disponible. Stock máximo: ${item.stock}`);
                return;
            }
            
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };
    
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };
    
    const clearCart = () => {
        setCartItems([]);
    };
    
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart,
            clearCart, 
            cartQuantity 
        }}>
            {children}
        </CartContext.Provider>
    );
};