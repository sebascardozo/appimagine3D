import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader";
import { products } from "../datos/datos";


  const items = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  

 function ItemListContainer({ mensaje }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
  
    useEffect(() => {
      items
        .then(resp => {setProducts(resp)})
        .catch(err => {console.log(err)})
        .finally(() => setLoading(false))
    }, []);

    return (
        <>
            <h1>{mensaje}</h1> 
            {loading ? <Loader/>
            : (<ItemList products={products} id={id}/>)}
            
        </>
    )
}
  
  export default ItemListContainer;

  