import React from 'react'
import "./About.css"
import about_img from "../../assets/about.jpeg"
import play_icon from "../../assets/play-icon.png"

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt=""  className='about-img'/>
            

        </div>
        <div className='about-right'>
            <h3>ABOUT MRT Movers</h3>
            <h2>Transportation redefined</h2>
           <p>MRT Movers has the largest mover network in the world combined with over 95 years of experience. Whether you are relocating long distance or locally, our global network ensures that no matter where you're going, Allied can get you home. As a full-service mover, we handle everything from packing, loading, transporting, and unpacking your belongings.

Our mission is to provide affordable moving services backed by a name you can trust. We are a company built on a history of service, and it is our pleasure to assist you as you plan and prepare for your next move. Get your instant quote today!</p>
        </div>

    </div>
  )
}

export default About