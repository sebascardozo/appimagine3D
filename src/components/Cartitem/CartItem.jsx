import { useCartContext } from "../context/CartContext";


//export default function CartItem({item}) {
//    const {clearItem} = useCartContext();

//    function removeItem() {
   //     clearItem(item.id)
//    }
//    
 //   return (
//        <li>Item: {item.name} - Precio: ${item.price} - Cantidad: {item.qty} - <span className="cart__remove-icon" onClick={removeItem}><i className="bi bi-bag-x-fill"></i></span></li>
//    );
//}

//
//import { UseCartContext } from "../context/CartContext";


export default function CartItem({item}) {
    const {clearItem} = useCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>Item: {item.name} - Precio: ${item.price} - Cantidad: {item.qty} - <span className="cart__remove-icon" onClick={removeItem}><i className="bi bi-bag-x-fill"></i></span></li>
    );
}