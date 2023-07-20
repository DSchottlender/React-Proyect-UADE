import { Button } from "./Button"
import React from 'react'
import "./Hero.css"
import "../App.css"

function Hero() {
  return (
    <div className="Hero-container">
    <video  src="/public/videos/video-2.mp4"  autoPlay loop muted />
    <h1>READY FOR YOUR NEW ADVENTURE</h1>
    <p> ARE YOU READY??</p>
    <div className="Hero-Btns">
    <Button  
        className="Btns" 
        buttonStyle="Btn--outline" 
        ButtonSize="Btn--large"
        > 
        GET STARTED
        
        <i className="far-fa-play-circle"/>
    </Button> 
    <Button  
        className="Btns" 
        buttonStyle="Btn--primary" 
        ButtonSize="Btn--large"
        > 
        Watch Trailer
         <i className="far-fa-play-circle"/>
    </Button> 
    </div>
 </div>
  )
}

export default Hero


