
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../components/styles/CartWidget.css';
import { Link } from "react-router-dom";
import { useCartContext } from "../components/context/CartContext";

 const CartWidget = () => {
  const {cartList}=useCartContext()
  console.log(cartList)
  const totalItems =  cartList.reduce((acc, item)=> acc = acc + item.qty, 0)
    return (
      <Link to='/Cart' style={{pointerEvents: !totalItems ? 'none' : ''}}>
      <div className="cart-widget" style={{opacity: !totalItems ? '0.5' : '1'}}>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        <div className="qty-display"></div>
        <span className="cartWidget__counter">{totalItems}</span>
      </div>
      </Link>
  )
}

export default CartWidget;
