import { toast } from 'react-toastify'
import AuthLayout from '../layout/AuthLayout'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import {RouterProvider,createBrowserRouter} from 'react-router'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'
import { useEffect } from 'react'
import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'
const AppRoutes = () => {
  let dispatch = useDispatch()
   const hydrateUser = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if(!loggedInUser){
      toast.error("unAuthorized user")
      return;
    }

    dispatch(addUser(loggedInUser))
  }

  useEffect(() => {
    hydrateUser()
  }, [])
  

  let router = createBrowserRouter([
    {
      path:"/",
      element:<PublicProtected/>,
      children:[{
        path:'',
        element:<AuthLayout/>,
      children:[
        {
          path:"",
          element:<LoginPage/>
        },
        {
          path:"register",
          element:<RegisterPage/>
        }
      ]
 } ]
    },
    {
      path:"/main",
      element:<MainProtected/>,
      children:[
        {
          path:'',
          element:<MainLayout/>,
      children:[
        {
          path:"home",
           element:<Home/>,
        },
      ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
  
}

export default AppRoutes
