import React from 'react'
import '../styles/cart.css'
import { useCartContext } from "../context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import CartItem from "../Cartitem/CartItem";
function Cart() {

    const {cartList, deleteCart, clearItem, totalItems, totalPrice} = useCartContext()

    if (!totalItems) {
      return (
          <div className="cart">
              <h1>El pedido está vacío</h1>
              <Link to='/'>
                  <button>Volver al menú</button>
              </Link>
          </div>
      );
  }
  
 //   return (
 //     <div className="cart-container">
  //      <div className="cart">
 //         <h2>Tu carrito de Compras</h2>
 // //          {cartList.map(product => 
 //           <li>
 //             <Link to ={`/detail/${product.id}`}>
 //             <img className="img-cart" src={product.image}></img>
 //             </Link>
 //             <p>{product.name}</p>
 //             <p>Precio: {product.price}</p>
 //             <p>Cantidad: {product.qty}</p>
 //             <button onClick={()=>deleteItem(product.id)} className="delete-item"><FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button>
 //           </li>)}
 //           <span>{`Costo total: ${totalPrice}`}</span>
 //           <p>{`Costo total: $${totalPrice}`}</p>
  //          {cartList.length ? <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button>  : <p>No hay productos en tu carrito</p>}
 //       </div>
 //     </div>
 //   )
 // }
  
  return (
    <div className="cart">
        <h1 className="cart__title">Su pedido:</h1>
        {cartList.map(product => <CartItem key={product.id} item={product}/>)}
        <button onClick={deleteCart}>Vaciar carrito</button>
       
        <p>{`Costo total: $${totalPrice}`}</p>
        <button onClick={clearItem}>Vaciar pedido</button>
    </div>
);
}
  export default Cart

