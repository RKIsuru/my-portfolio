import React from 'react'
import styles from './Styles.module.css'
import heroImg from '../../assets/hero-img.png'
import modeIcon from '../../assets/sun.svg'
import twitterL from '../../assets/twitter-light.svg'
import gitHubL from '../../assets/github-light.svg'
import linkedinL from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

const Hero = () => {
  return (
    <section id="hero" className="styles">
      <div className="styles">
        <img src={heroImg} alt="Profile picture of Isuru Aravinda" 
          className="styles hero" />
      </div>
      <img className="styles" src={modeIcon} alt="Color mode icon"/>
      <div className='styles'>
        <h1>Isuru Aravinda</h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="#"><img src={linkedinL} alt="linkedin-icon"/></a>
          <a href="#"><img src={gitHubL} alt="github-icon"/></a>
          <a href="#"><img src={twitterL} alt="twitter-icon"/></a>
        </span>
          <p>Lorem ipsum dolor sit amet.</p>
          <a href={CV} download target='blank'>
            <button className='hover'>Resume</button>
          </a>
      </div>
    </section>
  )
}

export default Hero