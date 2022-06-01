import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';

import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import Loader from "../loader/loader";
//import { products } from "../datos/datos";


 // //const items = new Promise((resolve) => {
 //   setTimeout(() => {
  //    resolve(products);
  //  }, 2000);
 // //});

  

 function ItemListContainer({mensaje}) {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, 'products');
      if (!id) {
          getDocs(queryCollection)
          .then(resp => resp.docs.map(product => ({id: product.id, ...product.data()})))
          .then(data => data.sort((a, b) => {
              if (a.category > b.category) {
                  return 1;
              }
              if (a.category < b.category) {
                  return -1;
              }
              return 0;
          }))
          .then(sorted => setProducts(sorted))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
      } else {
          const queryCollectionFilter = query(queryCollection, where('category','==',id));
          getDocs(queryCollectionFilter)
          .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
      }
  },[id]);

    return (
        <>
            <h1>{mensaje}</h1> 
            {loading ? <Loader/>
            : (<ItemList products={products} />)}
            
        </>
    )
}
  
  export default ItemListContainer;

  