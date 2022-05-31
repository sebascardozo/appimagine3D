import {createContext, useContext, useState} from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

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

  
    const deleteItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id ===id);
        newCart.splice(index,1);

        setCartList([...newCart])
    }

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