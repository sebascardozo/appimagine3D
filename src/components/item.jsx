
import { Link } from "react-router-dom"
import ItemCounter from "../components/ItemCounter/ItemCounter"
import './styles/item.css';


function Item({product}) {
  return (
   <div className="card" >
    <Link to ={`/detail/${product.id}`}>
          <img className="card-image" src={product.image} alt="Imagen del producto"></img> 
          <div className="container-btn">
          <button className="btn">Más Información</button>  
          </div>
    </Link>
    <div className="card-name">{product.name}</div>
          <div className="card-price"> $ {product.price}</div>
    </div>
    
  )
}

export default Item

 