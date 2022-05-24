import { Link } from "react-router-dom";


 function BuyButton() {
    
    return (
        <div className="buyButtons">
            <Link to='/Cart'>
                <button className="buyButtons__goToCart">Ver pedido</button>
            </Link>
            <Link to='/'>
                <button className="buyButtons__goToMenu">Seguir Comprando</button>
            </Link>
        </div>
    );

}
export default BuyButton;