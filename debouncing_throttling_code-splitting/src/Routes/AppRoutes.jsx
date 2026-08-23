import React from 'react'
import {lazy,Suspense} from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router'
import MainLayout from '../Layouts/MainLayout.jsx'

//Code Splitting 
let About = lazy(()=>import("../Pages/About"))  // It is use to open that page when it get triggered unless,
                                               //  it don't fetch or open that page at the time when website is being loaded for the first time.
import Contact from '../Pages/Contact.jsx'
import App from '../App.jsx'




const AppRoutes = () => {
   
    let router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout/>,
            children:[
              {
                path: "",
                element:<App/>
              },
              {
                path: "about",
                element:
                //It is use to show loading UI when page is being loaded in background.
                <Suspense fallback={<h1>About is loading....</h1>}> 
                 <About/>
                 </Suspense>
              },
              {
                path:"contact",
                element:<Contact/>,
              }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes
