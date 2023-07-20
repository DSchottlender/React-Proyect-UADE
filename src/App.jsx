import React from 'react'
import './App.css'
import Navbar from './Componets/NavBar'
import { Routes, Route } from "react-router-dom";
import Home from './Componets/Pages/HOME'
import Services from './Componets/Pages/Services';
import Costumers from './Componets/Pages/Costumers';
import  Products from './Componets/Pages/Products'



function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Costumers" element={<Costumers />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App
