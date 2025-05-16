import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  // Depuración
  console.log("ID del producto en Item:", product.id, product);

  if (!product.id) {
    return <div>Producto sin ID</div>;
  }

  // Verificar que price exista antes de usar toLocaleString
  const formattedPrice = product.price ? product.price.toLocaleString() : "Sin precio";

  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} className="item-image" />
      <div className="item-info">
        <h3 className="item-title">{product.title}</h3>
        <p className="item-price">${formattedPrice}</p>
        <Link to={`/item/${product.id}`} className="item-button">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;