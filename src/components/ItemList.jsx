import Item from "../components/item"
import '../components/styles/ItemList.css'


function ItemList({products,id}) {
  return (
    <div className="item-list">
            {id? 
                products.filter(products => products.category === id).map((product) => <Item key={product.id} product={product}/>):
                products.map(product => <Item id={product.id} product={product}/>)
            }
    </div>
  )
}

export default ItemList

