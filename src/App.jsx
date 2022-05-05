
import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemCounter from '../src/components/ItemCounter/ItemCounter'
import './index.css';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje= {'BIENVENIDO A NUESTRA PAGINA'} />
      <ItemCounter initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} unidad agregada`)}/>
    </>
    
  );
}
