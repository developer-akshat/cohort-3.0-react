import { useAuth } from "../hooks/authHooks";
import React from "react";

const Register = () => {
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
  } = useAuth();

  

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white text-xl font-bold shadow-lg shadow-indigo-600/20">
            A
          </div>

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Create your account and get started
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-7 shadow-2xl backdrop-blur">

          {/* FORM */}
          <form onSubmit={handleSubmit(registerForm)}>

            {/* Name */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters are required.",
                  },
                })}
                type="password"
                placeholder="Create a strong password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

              <p className="mt-2 text-xs text-slate-500">
                Use at least 8 characters with a mix of letters and numbers.
              </p>
            </div>

            {/* Terms */}
            <div className="mb-6 flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-950 accent-indigo-600"
              />

              <p className="text-xs leading-5 text-slate-400">
                I agree to the{" "}
                <button
                  type="button"
                  className="font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Terms & Conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Privacy Policy
                </button>
              </p>
            </div>

            {/* Register */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98]"
            >
              Create Account
            </button>

          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />

            <span className="text-xs text-slate-500">
              OR
            </span>

            <div className="h-px flex-1 bg-slate-800" />
          </div>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-slate-400">
            Already have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Sign In
            </button>
          </p>

        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 YourBrand. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Register;