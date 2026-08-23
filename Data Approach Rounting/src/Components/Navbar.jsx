import React from 'react';
import {NavLink} from 'react-router';

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/services'}>Services</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
    </div>
  )
}

export default Navbar
