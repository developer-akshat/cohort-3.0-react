import AuthLayout from '../layout/AuthLayout'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import {RouterProvider,createBrowserRouter} from 'react-router'
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path:"/",
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
    },
    {
      path:"/main",
      element:<MainLayout/>,
      children:[
        {
          path:"",
           element:<Home/>,
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
  
}

export default AppRoutes
