import React from 'react'
import '../styles/cart.css'
import { useCartContext } from "../context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";


const Cart = () => {

  const {cartList, deleteCart, deleteItem} = useCartContext()

  const total = cartList.reduce((acc, product)=> acc = acc + ((product.price) * product.qty),0)


console.log(total)
  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Tu Carrito de Compras</h2>
          {cartList.map(product => 
          <li className="cartItem">
            <Link to={`/detail/${product.id}`}>
            <img className="img-cart" src={product.image}></img>
            </Link>
            <p>{product.name}</p>
            <p>Precio: {product.price}</p>
            <p>Cantidad: {product.qty}</p>
            <button onClick={()=>deleteItem(product.id)} className="delete-item"><FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button>
          </li>)}
          {cartList.length ? <div>`
                                <h3 className="totalCompra">Total: ${total}</h3>
                                <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button>
                            </div>  : <div className="carritoVacio">
                                                <p>No hay productos en tu carrito</p>
                                                <Link to={"/"}>
                                                  <p>Ir a la tienda</p>
                                                </Link>
                                              </div> }
                              
      </div>
      <div className="cartInfo">
            <form>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Apellido"/>
            <input type="text" placeholder="Dirección"/>
            <button type="submit">Terminar mi compra</button>
            </form>

        </div>
    </div>
  )
}

export  default   Cart

