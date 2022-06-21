import Item from "../components/Item"
import '../components/styles/ItemList.css'


function ItemList({products}) {
  return (
    <div className="item-list">
        {products.map(product => <Item key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemList

