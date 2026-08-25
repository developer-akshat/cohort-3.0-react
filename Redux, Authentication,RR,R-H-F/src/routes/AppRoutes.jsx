import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from '../features/auth/UI/components/login'
import Register from '../features/auth/UI/components/register'
import AuthLayout from '../app/layout/AuthLayout'
import MainLayout from '../app/layout/MainLayout'
import Product from '../features/auth/UI/components/product'
let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>,
            children: [
                { 
                    path:"",
                    element: <Login/>
                },
                {
                    path: '/register',
                    element:<Register/>,
                }
            ]
        },
        {
            path:"/main",
            element:<MainLayout/>,
            children:[
                {
                    path:"products",
                    element:<Product/>
                }
            ]
        }
    ])


const AppRoutes = () => {

    
  return <RouterProvider router={router} />
}

export default AppRoutes
