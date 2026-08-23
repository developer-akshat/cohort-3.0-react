import React from 'react'
import {NavLink,Outlet} from 'react-router'
const MainLayout = () => {
  return (
    <div>

      <nav style=
      {{padding:"20px",
        display:"flex",
       gap:"20px",

       }}>
        <NavLink to={"/"}>App</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>

      </nav>
      <Outlet/>
    </div>
  )
}

export default MainLayout
