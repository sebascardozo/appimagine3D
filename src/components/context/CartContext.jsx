import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function useCartContext() {
    return useContext(cartContext)
}

const CartContextProv = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addToCart(item,){
        if(cartList.some(article => article.id === item.id)){
           const newCart = cartList.map(article => {
               if(article.id === item.id) {
                   article.qty = item.qty + article.qty;
               }
               return article;
           })
        setCartList(newCart);

        }
        else {
            setCartList([
                ...cartList,
                item
            ])
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
        <cartContext.Provider value={{
            cartList,
            addToCart,
            deleteItem,
            deleteCart
        }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProv
