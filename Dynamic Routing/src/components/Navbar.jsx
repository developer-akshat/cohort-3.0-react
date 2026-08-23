import React from 'react'
import {NavLink} from 'react-router'
const Navbar = () => {
  return (
    <div className="flex justify-center gap-40 bg-gray-600 p-5 text-xl">
      <h1>Logo</h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/about"}>About</NavLink>

    </div>
  )
}

export default Navbar
