import { useState } from 'react'
import { useCartContext } from "../context/CartContext";
import { Link} from "react-router-dom";
import { Form } from "../Form/Form";
import { Footer } from "../Footer/Footer";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/cart.css'

export const Cart = () => {
  const { cartList, deleteCart, deleteItem } = useCartContext();
  const [buy, setBuy] = useState(false);
  const total = cartList.reduce((acc, product)=> acc = acc + ((product.price) * product.qty),0)


  return (
    <>
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Tu Carrito de Compras  🛒</h2>
          {cartList.map((product) => 
          <li className="cartItem" key={product.id}>
            <Link to={`/detail/${product.id}`}>
            <img className="img-cart" src={product.image}></img>
            </Link>
            <p>{product.name}</p>
            <p>Precio: {product.price}</p>
            <p>Cantidad: {product.qty}</p>
            <button onClick={()=>deleteItem(product.id)} className="delete-item"><FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button>
          </li>)}
          {cartList.length ?(
            <>
            <div>
                <h3 className="totalCompra">Total: ${total}</h3>
                <button className="delete-button" onClick={deleteCart}>Vaciar Carrito  <FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button>
           </div> 
           <Form />
            </> 
          ):(
          <div className="carritoVacio">
              <p>No hay productos en tu carrito 🙁 </p>
            <Link to={"/"}>
              <p>Ir a la tienda <FontAwesomeIcon icon="fa-solid fa-cart-shopping-fast" /></p>
            </Link>
          </div> )}
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export  default   Cart

