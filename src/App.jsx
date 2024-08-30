import React from 'react'
import Hero from './sections/Hero/Hero'
import Navbar from './sections/Navbar/Navbar'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Certifications from './sections/Certifications/Certifications'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
    </>
  )
}

export default App