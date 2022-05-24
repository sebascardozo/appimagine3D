import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function useCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);

    function isInCart(id) {
        return cartList.some(product => product.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(product => product.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                item]);
        }
    }
    function clearCart() {
        setCartList([]);
    }
    function clearItem(id) {
        let i = cartList.findIndex(product => product.id === id);
        const newCartList = cartList;
        newCartList.splice(i,1);
        setCartList(newCartList);
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            clearItem
        }}>
            {children}
        </cartContext.Provider>
    );
}


