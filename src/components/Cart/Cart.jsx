import React from 'react'
import '../styles/cart.css'
import { useCartContext } from "../context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Cart() {

    const {cartList, deleteCart, deleteItem} = useCartContext()
  
    return (
      <div className="cart-container">
        <div className="cart">
          <h2>Tu carrito de Compras</h2>
            {cartList.map(product => 
            <li>
              <Link to ={`/detail/${product.id}`}>
              <img className="img-cart" src={product.image}></img>
              </Link>
              <p>{product.name}</p>
              <p>Precio: {product.price}</p>
              <p>Cantidad: {product.qty}</p>
              <button onClick={()=>deleteItem(product.id)} className="delete-item"><FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button>
            </li>)}
            {cartList.length ? <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button>  : <p>No hay productos en tu carrito</p>}
        </div>
      </div>
    )
  }
  
  export default Cart