import React from 'react'
import Home from './Home'
import Cart from './Cart'
import About from './About'
import {Routes} from 'react-router'
import {Route} from 'react-router'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Router
