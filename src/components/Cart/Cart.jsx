import React from 'react'
import '../styles/cart.css'
import { UseCartContext } from "../context/CartContext";

export default function Cart() {
    const {cartList, clearCart} = UseCartContext();
    
    return (
        <div className="cart">
            <h1>Su pedido:</h1>
            {cartList.map(product => <li>Item: {product.item.name} - Cantidad: {product.quantity}</li>)}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}