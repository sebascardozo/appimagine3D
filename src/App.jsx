
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Hola, soy ItemListContainer!"/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />
   
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;