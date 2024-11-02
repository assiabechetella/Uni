import React from 'react'
import './About.css'
import about_img from "../../assets/about.jfif"
import play_icon from "../../assets/play-button.png"


const About = ({setPlayerState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayerState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Building Tomorrow's Leaders Today</h2>
            <p>At our university, we cultivate intellectual curiosity and practical skills, preparing students for impactful careers in a rapidly evolving world. </p>
            <p>Our university is dedicated to providing a transformative educational experience, blending academic rigor with real-world applications. </p>
            <p>At our university, we champion academic excellence and personal growth. Our diverse programs inspires students to achieve their highest potential.</p>
        </div>
    </div>
  )
}

export default About
