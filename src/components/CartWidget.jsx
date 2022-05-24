
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../components/styles/CartWidget.css';
import { Link } from "react-router-dom";


const CartWidget = () => {

  return (
    <Link to='/Cart'>
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
      <div className="qty-display"></div>
    </div>
    </Link>
  );
};

export default CartWidget;
