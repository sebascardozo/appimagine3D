import React, { useEffect, useState } from 'react';
import Item from '../components/item';
import { productList } from '../components/datos/datos';
import '../components/styles/ItemList.css'



const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getFetch = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="product-list-container">
      {
        products.length ? ( 
          <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  );
};

export default ItemList;
