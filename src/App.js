import React from 'react'
import Main from './Components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Coaching from './Components/Coaching'
import Visa from './Components/Visa'
import Countries from './Components/Countries'
import Contact from './Components/Contact'
import ScrollTop from './Components/ScrollTop'
import Features from './Components/Features'
import Testimonials from './Components/Testimonials'
import Pricing from './Components/Pricing'

const App = () => {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
         <Route path="/about" element={<About />} />
          <Route path="/coaching" element={<Coaching />} />
           <Route path="/visa" element={<Visa/>} />
            <Route path="/countries" element={<Countries/>} />
             <Route path="/contact" element={<Contact />} />
              <Route path="/features" element={<Features/>} />
              <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/pricing" element={<Pricing/>} />
      </Routes>
      <ScrollTop/>
    </BrowserRouter>
    </>
  )
}

export default App

