import { Link } from "react-router-dom";


export default function buyButton() {
    
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