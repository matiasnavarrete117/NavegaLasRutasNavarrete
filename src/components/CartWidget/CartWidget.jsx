import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart />
            <span className="cart-notification">0</span>
        </div>
    );
};

export default CartWidget;