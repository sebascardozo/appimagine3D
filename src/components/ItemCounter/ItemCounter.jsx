import React, { useState } from 'react';
import image from '../images/impresora3d.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/ItemCounter.css'

function ItemCounter ({stock, initial, onAdd}) {

    const [quantity, setQuality] = useState(initial);
    
    function increase(){
        if (quantity< stock){
            setQuality(quantity + 1);
        }
        }
   function decrease(){
            if (quantity > 1){
                setQuality(quantity - 1);
            }
      }
     
        function addToCart(){

            onAdd (quantity);
        }
   return ( 
     <div className="ItemCounter">
         <img src={image} alt="" />
     <h1>Ipresora 3D</h1>
      <button id='plus' onClick={increase}>Sumar</button>
           <span>{quantity}</span>
     <button id='less' onClick={decrease}> Restar </button>
     <button className="addToCart" onClick={addToCart}><FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
     );
   }

  export default ItemCounter;