import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
  return (
    <div className='Cards'>
        <h1>Check out  these EPiC ADVENTURES</h1>
        <div className="cards-container">
         <div className="cards-wrapper">
            <ul className="cards-items">
            <CardItem 
             src = "images/img-9.jpg"
            text  = "Explore the Hidde  waterfall deep iside The Amazo Jugle"
            label = "Avetures"
            path ="/src/Componets/Pages/Products.jsx"
            />
            <CardItem 
             src = "images/img-2.jpg"
            text  = "Explore the Hidde  waterfall deep iside The Amazo Jugle"
            label = "Luxury"
            path ="/src/Componets/Pages/Products.jsx"
            />
            <CardItem 
             src = "images/img-5.jpg"
            text  = "Explore the Hidde  waterfall deep iside The Amazo Jugle"
            label = "Avetures"
            path ="/src/Componets/Pages/Products.jsx"
            />
            <CardItem 
             src = "images/img-4.jpg"
            text  = "Explore the Hidde  waterfall deep iside The Amazo Jugle"
            label = "Avetures"
            path ="/src/Componets/Pages/Products.jsx"
            />
            </ul>
        </div>
        </div>    
    </div>
  )
}

export default Cards