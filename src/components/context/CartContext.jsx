import {createContext, useContext, useState} from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
     const total = cartList.reduce((acc, product)=> acc = acc + ((product.price) * product.qty),0);
    
  
    //añadir al carrito
    function isInCart(id) {
        return cartList.some(product => product.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
          
            let i = cartList.findIndex(product => product.id === item.id);
            const newCartList = cartList;
            newCartList[i].qty += item.qty;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                item]);
        }
    }
  
    //actualizar carrito//
    function updateCart() {
      setTotalPrice(
        cartList
          .map((element) => element.counter * element.price)
          .reduce((anterior, siguiente) => anterior + siguiente, 0)
      );
  
      //Total products //
      setTotalProducts(
        cartList
          .map((element) => element.counter)
          .reduce((anterior, siguiente) => anterior + siguiente, 0)
      );
    }

    //Remove Product//
    const deleteItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id ===id);
        newCart.splice(index,1);

        setCartList([...newCart])
    }
    //Clear Cart//
    const deleteCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteItem,
            deleteCart
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider