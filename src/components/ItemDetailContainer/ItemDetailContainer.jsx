import { useEffect, useState } from "react";
//import { products } from "../datos/datos"
import Loader from "../loader/loader";
import ItemDetail from "../ ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

//const findItem = (id) => {
 // return new Promise ((resolve) =>{
 //   setTimeout(() => {
//        const itemDet = id ? products.find(product => product.id === id) : products
 //       resolve (itemDet)
 //   },2000);
 // });
//}



function ItemDetailContainer() {
  const [product,setProduct] = useState([]);
  const [loading,setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
      const db = getFirestore();
      const dbQuery = doc(db, 'products', id);
      getDoc(dbQuery)
      .then(resp => setProduct({id: resp.id, ...resp.data()}))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  },[id]);

  
 
  return (//
    <>
    {loading ? <Loader/>
    : (<ItemDetail product={product}/>)}
    </>
  )
}

export default ItemDetailContainer