import React from 'react';
import CartWidget from './CartWidget';
import './styles/NavBar.css';
import logo from '../components/images/favicon-32x32.png'

const NavBar = () => {
    return (
        <header className="header">
          <div className="logo-container" >
            <a href="/">< img src={logo}  alt="logo" /></a>
          </div>        
          <nav>
            <ul className="nav-container">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/">Productos</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </nav>
           <CartWidget />
          </header>
  );
};

export default NavBar;
