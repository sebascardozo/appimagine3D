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
    function addToCart(product) {
        if (isInCart(product.id)) {
            alert("Ya agregaste este producto");
            let i = cartList.findIndex(product => product.id === product.id);
            const newCartList = cartList;
            newCartList[i].qty += product.qty;
            setCartList(newCartList);
            updateCart();
        } else {
            alert(`Agregaste ${product.qty} ${product.name} al carrito`);
            setCartList([...cartList,product]);
        }
    };
  
    //Actualizar carrito//
    function updateCart() {
      setTotalPrice(
        cartList
          .map((element) => element.qty * element.price)
          .reduce((anterior, siguiente) => anterior + siguiente, 0)
      );
  
    //Total producto //
      setTotalProducts(
        cartList
          .map((element) => element.qty)
          .reduce((anterior, siguiente) => anterior + siguiente, 0)
      );
    }

    //Quitar Producto//
    const deleteItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id ===id);
        newCart.splice(index,1);

        setCartList([...newCart])
    }
    //Vaciar Carrito//
    const deleteCart = () => {
        setCartList([])
    };

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteItem,
            deleteCart
        } }
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider