import React from 'react'
import Header from '../components/Header/Header'
import FirstProduct from '../components/FirstProduct/FirstProduct'
import Intro from '../components/Introduction/Intro'
import ContentQR from '../components/ContentQR/ContentQR'
const HomePage = () => {
  return (
    <div>
    <Header />
    <Intro/>
    <FirstProduct />
    <ContentQR/>
    </div>
  )
}

export default HomePage
