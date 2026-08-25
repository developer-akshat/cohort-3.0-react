import React from "react";
import { authHook } from "../../hooks/authHook";
import {useSelector} from 'react-redux'
import { useEffect } from "react";
const Login = () => {
     const {
             navigate,
             handleSubmit,
             errors,
             register,
             loginForm,
         } = authHook()
         
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
            {...register("username",{
                required: "Username is required",
            })}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
             {...register("password",{
                required: "Password is required"
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-gray-600">Remember me</span>
            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <button onClick={()=> navigate("/register")} className="text-blue-600 font-medium hover:underline">
            Register
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;
