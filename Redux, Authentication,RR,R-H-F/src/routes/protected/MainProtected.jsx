import React from 'react'
import { Navigate, Outlet } from 'react-router'
import {useSelector} from 'react-redux'
const MainProtected = () => {

    let {isAuthenticated,username,isLoading} = useSelector((store)=> store.auth)
 
     if(isLoading)return <h1>Loading state...</h1>

    if(!username){
        return <Navigate to={"/"} />
    }
  return <Outlet/>
}

export default MainProtected
