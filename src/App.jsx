import React from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Componets/Pages/HOME'
import Products from './Componets/Pages/PRODUCTS'
import Services from './Componets/Pages/SERVICES'
import Costumers from './Componets/Pages/Costumers'



function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<Costumers />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App
