
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../components/styles/CartWidget.css';
import { Link } from "react-router-dom";
import { useCartContext } from "../components/context/CartContext";


const CartWidget = () => {
  const {totalItems} = useCartContext();

  return (
    <Link to='/Cart' style={{pointerEvents: !totalItems ? 'none' : ''}}>
    <div className="cart-widget" style={{opacity: !totalItems ? '0.5' : '1'}}>
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
      <div className="qty-display"></div>
      <span className="cartWidget__counter">{totalItems}</span>
    </div>
    </Link>
  );
};

export default CartWidget;


//return (
//  <Link to='/cart' style={{pointerEvents: !totalItems ? 'none' : ''}}>
//      <div className='cartWidget' style={{opacity: !totalItems ? '0.5' : '1'}}>
//          <span className="cartWidget__icon"><i className="bi bi-bag"></i></span>
//          <span className="cartWidget__counter">{totalItems}</span>
//      </div>
//  </Link>
//);
//}