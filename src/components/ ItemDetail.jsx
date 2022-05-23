import { useState } from "react";
import ItemCounter from "../components/ItemCounter/ItemCounter"
import buyButton from "../components/buyButton"
import './styles/ItemDetail.css'



function ItemDetail({product}) {
  const [inputType, setInputType] = useState('button')

  const handleInput = () => {
      setInputType('input')
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
  ? <ItemCounter stock={product.stock} initial={product.initial} onAdd={(count)=> console.log(`Has agregado ${count} producto/s a tu carrito`) } handleInput={handleInput}/>
  : <buyButton/>
}
            </div>
          </div>
        </div>
  )
}

export default ItemDetail

