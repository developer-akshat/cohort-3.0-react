import {useNavigate} from 'react-router'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/authSlice';
import { toast } from 'react-toastify';
export const useAuth = () =>{

    let dispatch = useDispatch()

  let navigate = useNavigate();
  const [registeredUsers, setregisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [])
  let {
      register,
      handleSubmit,
      reset,
      formState:{errors}
    } = useForm()


    const registerForm = (data) => {
        let arr = [...registeredUsers,data]
        setregisteredUsers(arr)
        localStorage.setItem("registeredUsers",JSON.stringify(arr))
        toast.success("User register successfully.")
    };
    const loginForm = (data)=> {
        let user = registeredUsers.find((val)=>{
          return  val.email === data.email && val.password === data.password;
        })
        if(!user){
            toast.error("Invalid Something....")
            return
        }
        

        
        dispatch(addUser(user))
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        toast.success("User logged in ")
        reset();
    }



  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  }
}