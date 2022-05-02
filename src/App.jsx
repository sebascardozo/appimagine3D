
import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import './index.css';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje= {'BIENVENIDO A NUESTRA PAGINA'} />
    </>
    
  );
}
