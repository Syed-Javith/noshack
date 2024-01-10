import React from 'react'
import ParticleBackground from '../Particles/ParticleBackGround'
import NavBar from '../NavBar/NavBar'
import "./Header.css"

const Header = () => {
  return (
    <div className='home container'>
        <NavBar/>
    <h1>A Digital User Interface for anyone and everyone.</h1> 
     <p>Extract the most out of India's continually evolving digital economy with our innovative solutions.</p>
     <ParticleBackground/>
    </div>
  )
}

export default Header
