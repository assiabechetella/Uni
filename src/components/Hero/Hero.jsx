import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/darkarrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Empowering Minds, Shaping Bright Futures</h1>
        <p>At our university, we foster innovative thinking and critical problem-solving skills, preparing students for success in a dynamic world. Our diverse programs and dedicated faculty ensure a comprehensive, high-quality education.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero
