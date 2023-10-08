import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-dark'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Blogs/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
