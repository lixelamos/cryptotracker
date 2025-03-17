import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import PricingPage from "./pages/Pricing/PricingPage";
import Features from "./pages/Features/Feature";
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Features" element={<Features />} /> 

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
