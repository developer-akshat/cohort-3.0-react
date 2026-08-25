import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import {loginUserApi} from '../api/authApi'
import { addUser } from "../state/authSlice"
import { toast } from "react-toastify"

export const authHook = () =>{

    const [RegisterUser, setRegisterUser] = useState(
        JSON.parse(localStorage.getItem("registeredUser")) || [])
  let navigate = useNavigate()
  let dispatch = useDispatch()
 let {
    register,
    handleSubmit,
    reset,
    formState:{errors},
 } = useForm()


  const loginForm = async (data)=>{
    try {
         let response = await loginUserApi(data)
         dispatch(addUser(response))
         toast.success("User Logged in")
    } catch (error) {
        console.log("form api error", error)
    }
}

 const registerForm = (data)=>{
    let arr = [...RegisterUser,data]
    setRegisterUser(arr)
  localStorage.setItem("registeredUser",JSON.stringify(arr))
 
 }



  return {
     navigate,
      register,
      handleSubmit,
      reset,
      errors,
      loginForm,
      registerForm,
    
  }
}

