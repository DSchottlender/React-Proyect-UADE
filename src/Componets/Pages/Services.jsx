import React from "react";
import  "../../App.css"
import "../Button"
import "../Footer"
import  "./Services.css"



  function Services() {
    return <h1 className="Services">SERVICES</h1>
}

export  function Catalogy(){
    return (
        <>
        <h1>Destinations</h1>
        <div className="Destinations">
        <img src="images" alt="/public/images"/>
        </div>
        <a/>
        <div className="destinations__footer">
            <p>title</p>
            <label>Category</label>
            <p  className="Price">$1200</p>
            <button type='submit'>Book Now!</button>
        </div>
        </>
   )      
}

export default Services