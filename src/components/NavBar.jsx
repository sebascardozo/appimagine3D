import { Link } from "react-router-dom";
import React from 'react';
import CartWidget from './CartWidget';
import logo from '../components/images/favicon-32x32.png'
import '../components/styles/NavBar.css'




export default function NavBar() {
    return (
        <header className="header">
            <Link to='/'>
                <img className="logo-container" src={logo} alt="" />
            </Link>
            <nav >
                <ul className="nav-container">
                    <Link to='/' className='link' >
                        <li>Inicio</li>
                    </Link>
                    <Link to='/category/impresoras' className='link' >
                        <li>Impresoras</li>
                    </Link>
                    <Link to='/category/insumos'className='link' >
                        <li>Insumos</li>
                    </Link>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    );
}