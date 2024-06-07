import React from 'react'
import Home from '../Home/Home'
import '../Home/Home.css'
import AboutMe from '../AboutMe'
import MySkills from '../MySkills'
import MyPortfolio from '../MyPortfolio'
import ContactMe from '../ContactMe'
import Footer from '../Footer'

function MainPage() {
  return (
    <div className='home-container'>
        <Home/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default MainPage