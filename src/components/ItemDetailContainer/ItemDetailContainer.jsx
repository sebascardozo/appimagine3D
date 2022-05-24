import { useEffect, useState } from "react";
import { products } from "../datos/datos"
import Loader from "../loader/loader";
import ItemDetail from "../ ItemDetail";
import { useParams } from "react-router-dom";

const findItem = (id) => {
  return new Promise ((resolve) =>{
    setTimeout(() => {
        const itemDet = id ? products.find(product => product.id === id) : products
        resolve (itemDet)
    },2000);
  });
}


function ItemDetailContainer({}) {

  const [product, setProduct] = useState([]);
  const[loading, setLoading] = useState([true]);
 
  const {detailId} = useParams()

  useEffect(() =>{
    findItem(detailId)
    .then((resp) =>{setProduct(resp)})
    .catch((err) =>{console.log(err)})
    .finally(() => setLoading(false))
  },[detailId])

 
  return (
    <>
    {loading ? <Loader/>
    : (<ItemDetail product={product}/>)}
    </>
  )
}

export default ItemDetailContainer