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
         <img src={image} alt="impresora 3D" />
     <h1>Impresora 3D</h1>
      <button className="plus" id='plus' onClick={increase}>+</button>
           <span>     {quantity}    </span>
     <button className="less" id='less' onClick={decrease} > - </button>
     <button className="addToCart" onClick={addToCart}> agregar <FontAwesomeIcon icon={faCartShopping} /> </button>
    </div>
     );
   }

  export default ItemCounter;