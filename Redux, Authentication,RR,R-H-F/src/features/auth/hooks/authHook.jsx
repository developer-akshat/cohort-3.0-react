import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from "../state/authSlice"
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

  const loginForm = (data)=>{
  let user = RegisterUser.find((val)=>{
    return val.email === data.email && val.password === data.password })

  if(!user){
    console.log("error")
  return 
  }
   
  dispatch(addUser(user))
  navigate("/main/products")
  localStorage.setItem("loggedInUser",JSON.stringify(user))
  reset()
 }

 let addUsers = useSelector((store)=> store.addUser)

 let hydration = () =>{
    if(!addUsers){
    let reduxUser = JSON.parse(localStorage.getItem("loggedInUser"))
    dispatch(addUser(reduxUser))
    }   
 }

 useEffect(() => {
    hydration()
 }, [])
 

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
      hydration
  }
}
