import React from 'react'
import "./Hero.css"
import whatsapp from "../../assets/whatsapp.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='whatsapp-icon'>
        <a href="#"><img src={whatsapp} alt="" /></a>
      </div>
      
    </div>
  )
}

export default Hero