import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from '../features/auth/UI/components/login'
import Register from '../features/auth/UI/components/register'
import AuthLayout from '../app/layout/AuthLayout'
import MainLayout from '../app/layout/MainLayout'
import MainProtected from '../routes/protected/MainProtected'
import PublicProtected from '../routes/protected/PublicProtected'
import Product from '../features/auth/UI/components/product'
import { hydrateUser } from '../features/auth/api/authApi'
import {useDispatch} from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'





const AppRoutes = () => {
  
    let dispatch = useDispatch()

    useEffect(() => {
 (async ()=>{
 try { 
    let response = await hydrateUser()
    console.log(response)
    dispatch(addUser(response))
    
 } catch (error) {
    console.log("error in hydration",error)
 }
 })()
}, [])


let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtected/>,
            children: [
                { 
                    path:"",
                    element: <AuthLayout/>,
                    children:[
                        {
                            path:"",
                            element:<Login/>
                        },
                        {
                            path: "register",
                            element:<Register/>,
                        }
                    ]
                },
                
            ]
        },
        {
            path:"/main",
            element:<MainProtected/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<Product/>
                        }
                    ]
                }
            ]
        }
    ])

    
  return <RouterProvider router={router} />
}

export default AppRoutes
