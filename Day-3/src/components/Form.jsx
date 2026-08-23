import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({Name,setName,Email,setEmail}) => {
   let {register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm({
    mode: "onChange",
  })
  let formSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form 
      
      onSubmit={handleSubmit(formSubmit)} 
      
      className="flex flex-col h-fit p-10 rounded-2xl w-80 
      gap-5 items-center bg-blue-400" >
        <input
        
        {...register("name",{
          required: "Name is required",
          pattern:{
            value:/^[A-Za-z]+$/,
            message:"Blank spaces not allow"
          }
        })} 
        
        className="px-5 py-2 bg-white-500 outline-1 rounded-xl w-70"
         type="text" placeholder="Enter your Name" />

         {errors.name && <p className="text-red-800 font-bold">{errors.name.message}</p>}
        <input 
         
         {...register("email",{
          required: "Email is required",
          pattern:{
            value:/^\S+@\S+\.\S+$/,
            message:"Please Enter valid email"
          }
        })} 
        
        className="px-5 py-2 bg-white-500 outline-1 rounded-xl w-70" type="email"  placeholder="Enter Your Email" />

         {errors.email && <p className="text-red-800 font-bold">{errors.email.message}</p>}
          

         <input 
         
         {...register("number",{
          required: "Mobile No. is required",
          minLength:{
            value:10,
            message:"Minimum 10 digit required"
          },
          maxLength:{
            value:10,
            message:"Maximum 10 digit required"
          }
        })} 
        
        className="px-5 py-2 bg-white-500 outline-1 rounded-xl w-70" type="number"  placeholder="Enter Your Mobile-No." />
        {errors.number && <p className="text-red-800 font-bold">{errors.number.message}</p>}
        <span className="flex gap-4">
        <label htmlFor="category">Select Your Category</label>
        <select name="category">
          <option value="Mens">Mens</option>
          <option value="Kids">Kids</option>
          <option value="Women">Women</option>
        </select>
        </span>
        <button  className="px-3 py-1 bg-red-400 rounded">Submit</button>
      </form>
    </div>
  )
}

export default Form
