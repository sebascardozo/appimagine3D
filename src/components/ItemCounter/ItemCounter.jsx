import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/ItemCounter.css'

function ItemCounter ({stock, initial, onAdd, handleInput}) {
  const [count, setCount] = useState(initial);
    const [qty, setQuality] = useState(initial);
    
    function increase(){
        if (qty< stock){
            setQuality(qty + 1);
        }
        }
   function decrease(){
        if (qty > 1){
            setQuality(qty - 1);
        }
      }
     
      function addToCart() {
        onAdd(count);
        handleInput();
      }
    
   return ( 
     <div className="ItemCounter">
         
      <button className="plus" id='plus' onClick={increase}>+</button>
           <span className="qty">     {qty}    </span>
     <button className="less" id='less' onClick={decrease} > - </button>
     <button className="addToCart" onClick={addToCart}> agregar <FontAwesomeIcon icon={faCartShopping} /> </button>
    </div>
     );
   }

  export default ItemCounter;


