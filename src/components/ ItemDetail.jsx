import { useState } from "react";
import ItemCounter from "../components/ItemCounter/ItemCounter"
import { useCartContext } from "../components/context/CartContext"
import BuyButton from "../components/button/BuyButton";
import './styles/ItemDetail.css'




function ItemDetail({product}) {
  const [inputType, setInputType] = useState('button')

  const handleInput = () => {
      setInputType('input')
  }     
  const {addToCart} = useCartContext()

  const onAdd = (qty) =>{
    console.log(`Has agregado ${qty} producto/s a tu carrito`)
    addToCart({...product, qty})
  }

  return (
    <div className="detail-container">
      <div className="detail">
        <img src={product.image} alt="" className="detail-img"/>
        <div className="detail-item">
            <p className='detail-name'>{product.name}</p>
            <p className="detail-description">{product.description}</p>        
            <p>{product.price}</p>
                {
                  inputType === 'button' 
                  ? <ItemCounter stock={product.stock} initial={product.initial} onAdd={onAdd} handleInput={handleInput}/>
                  : <BuyButton/>
                }
            </div>
          </div>
        </div>
  )
}

export default ItemDetail


