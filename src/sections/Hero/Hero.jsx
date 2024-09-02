import React from 'react'
import heroImg from '../../assets/hero-img.png'
import themeToggler from '../../assets/sun.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import CV from '../../assets/cv.pdf'

function Hero() {
    return (
        <section id="hero" className="bg-gray-100 dark:bg-gray-900 h-screen flex items-center min-h-[500px] justify-center lg:gap-[120px] flex-col md:flex-row lg:flex-row">
        <div className='flex flex-col items-center text-center gap-3'>
          <img src={ heroImg } className='max-w-[200px] md:max-w-[350px] sm:max-w-[200px] xs:max-w-[200px]' alt="Picture of Isuru Aravinda" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white font-rubik">Hello, I'm Isuru Aravinda</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-robotoMono">Fullstack Developer</p>
          <div className='flex gap-4 text-3xl'>
            <a href="#" className='hover:text-4xl'><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#" className='hover:text-4xl'><FontAwesomeIcon icon={faGithub}/></a>
            <a href="#" className='hover:text-4xl'><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="#" className='hover:text-4xl'><FontAwesomeIcon icon={faMedium}/></a>
          </div>
        </div>
        <div className="text-center max-w-[300px]">
          <p className='font-robotoMono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ipsam quos.</p>
          <div className='flex flex-row justify-evenly'>
          <a href="#projects" className="font-rubik mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">Resume</a>
          <a href="#projects" className="font-rubik mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">View My Work</a>
          </div>    
        </div>
      </section>
    ); 
}

export default Hero