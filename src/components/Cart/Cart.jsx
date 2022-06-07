
import { useState } from 'react'
import { useCartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";
import '../styles/cart.css'

const Cart = () => {
  const [userId, setUserId] = useState('');
  const db = getFirestore()
  const {cartList, deleteCart, deleteItem} = useCartContext()
  const total = cartList.reduce((acc, product)=> acc = acc + ((product.price) * product.qty),0)
  const [buyer, setBuyer] = useState({
    name:'',
    email: '',
    lastName:'',
    adress: '',
    city: ''
  });
  function handleInputChange(e){
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  function newOrder(e){
        e.preventDefault();
        let order = {};

        order.buyer = buyer;
        order.products = cartList.map(product => {
            const id = product.id;
            const name = product.name;
            const price = product.price;
            const qty = product.counter;

            return { id, name, price, qty }
          })
          console.log(order)
        order.total = total;
        
        const queryCollectionOrders = collection(db, 'orders')

        setTimeout(()=>{
          addDoc(queryCollectionOrders, order)
            .then(resp => setUserId(resp.id))
            .catch(err => console.log(err))
          // .finally(deleteCart())
          
        },2000)
       
    }
  return (
    
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Tu Carrito de Compras  🛒</h2>
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
          {cartList.length ?
            <>
            <div>
                <h3 className="totalCompra">Total: ${total}</h3>
                   <button className="delete-button" onClick={deleteCart}>Vaciar Carrito  <FontAwesomeIcon icon={faTrash} size="md"></FontAwesomeIcon></button>
           </div> 
         </> :
          <div className="carritoVacio">
              <p>No hay productos en tu carrito 🙁 </p>
            <Link to={"/"}>
              <p>Ir a la tienda <FontAwesomeIcon icon="fa-solid fa-cart-shopping-fast" /></p>
            </Link>
          </div> }
      </div>
      <div className="cartInfo">
                        <form onSubmit={(e) => newOrder(e)}>
                          <input type="email" placeholder="Mail" name="email" onChange={handleInputChange} />
                          <input type="text" placeholder="Nombre" name="name" onChange={handleInputChange} />
                          <input type="text" placeholder="Apellido" name="lastName" onChange={handleInputChange} />
                          <input type="text" placeholder="Dirección" name="adress" onChange={handleInputChange} />
                          <input type="text" placeholder="Localidad" name="city" onChange={handleInputChange} />
                          <button type="submit">Enviar pedido</button>
                        </form>
                      </div>
    </div>
  )
}

export  default   Cart

