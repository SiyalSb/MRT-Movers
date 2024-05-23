import React from 'react'
import "./Hero.css"
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='whatsapp-icon'>
        <a href="https://wa.me/923062611435"><img src={whatsapp} alt="" /></a>
        <a href="#"><img src={instagram} alt="" /></a>
        <a href="#"><img  src={facebook} alt="" /></a>

      </div>
      
    </div>
  )
}

export default Hero