import ItemCounter from "../components/ItemCounter/ItemCounter"
import './styles/ItemDetail.css'



function ItemDetail({product}) {
  return (
        <div className="detail-container">
          <div className="detail">
            <img src={product.image} alt="" className="detail-img"/>
            <div className="detail-item">
                <p className='detail-name'>{product.name}</p>
                <p className="detail-description">{product.description}</p>
                <p>{product.price}</p>
                <ItemCounter stock={product.stock} initial={product.initial} onAdd={(count)=> alert(`Has agregado ${count} producto/s a tu carrito`)}/>
            </div>
          </div>
        </div>
  )
}

export default ItemDetail

