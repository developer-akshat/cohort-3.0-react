import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}>Login</NavLink> 
      <NavLink to={"/register"}>Register</NavLink> 
      <NavLink to={"/products"}>Products</NavLink> 

    </div>
  )
}

export default Navbar
