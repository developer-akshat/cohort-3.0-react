import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Navbar from '../Components/Navbar'
import MainLayout from '../Layouts/MainLayout'
const AppRoutes = () => {

    let routes = createBrowserRouter([
        {
            path: "/",
            element:<MainLayout/> ,
            children:[
        {
            path: "",
            element: <Home/>
        },
        {
            path: "services",
            element: <Services/>
        },
        {
            path:"contact",
            element: <Contact/>
        }
            ]

        },
        
    ])
  return  <RouterProvider router={routes} />
  
}

export default AppRoutes
