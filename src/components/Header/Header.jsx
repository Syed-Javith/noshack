import React from 'react'
import ParticleBackground from '../Particles/ParticleBackGround'
import "./Header.css"

const Header = () => {
  return (
    <div className='home container'>
        <div className="contents">
        <h1>A Digital User Interface for anyone and everyone.</h1> 
     <p>Extract the most out of India's continually evolving digital economy with our innovative solutions.</p>
        </div>
     <ParticleBackground/>
    </div>
  )
}

export default Header
