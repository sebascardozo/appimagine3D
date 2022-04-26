import React from 'react';

//import mi archivo css
import './styles/NavBar.css';
import logo from '../components/images/favicon-32x32.png'

const NavBar = () => {
  
    return (
        <header className="header">
          {/* logo de la marca */}
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          {/* links de navegación */}
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
          </header>
  );
};

export default NavBar;
