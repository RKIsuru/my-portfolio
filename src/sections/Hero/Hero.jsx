import React from 'react'
import heroImg from '../../assets/hero-img.png'
import themeToggler from '../../assets/sun.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import CV from '../../assets/cv.pdf'

function Hero() {
    return (
        <section id="hero" className="bg-gray-100 dark:bg-gray-900 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Hello, I'm Isuru Aravinda</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">A Fullstack Developer</p>
          <a href="#projects" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">View My Work</a>
        </div>
      </section>
    ); 
}

export default Hero