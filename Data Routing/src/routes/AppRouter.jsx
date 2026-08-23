import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router'
import Home from '../pages/Home'
import Mylayout from '../layout/Mylayout'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
const AppRouter = () => {
    let router = createBrowserRouter([
        {
            path:'/',
            element:<Mylayout/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'contact',
                    element:<Contact/>
                },
                {
                    path:'products',
                    element:<Products/>
                }
                
            ]
        },
        
    ])
  return  <RouterProvider router={router}/>
}

export default AppRouter
