import { Link } from "react-router-dom";
import "../styles/Buybutton.css"


 function BuyButton() {
    
    return (
        <div className="buyButton">
            <Link to='/Cart'>
                <button className="button">Ver pedido</button>
            </Link>
            <Link to='/'>
                <button className="button">Seguir Comprando</button>
            </Link>
        </div>
    );

}
export default BuyButton;