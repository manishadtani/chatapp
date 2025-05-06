import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // watch the password and confirm password fields
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  console.log(confirmPassword);

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    // console.log(userInfo);
    await axios
      .post("/api/user/signup", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Signup successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };
  return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
    >
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-wide">
          Chat<span className="text-green-400">App</span>
        </h1>
        <p className="text-sm text-gray-300 mt-1">Create your account</p>
      </div>

      {/* Full Name */}
      <div>
        <label className="block mb-1 text-sm font-medium">Full Name</label>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/20 focus-within:ring-2 ring-green-400">
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561...Z" />
          </svg>
          <input
            type="text"
            className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-400"
            placeholder="Enter your name"
            {...register("fullname", { required: true })}
          />
        </div>
        {errors.fullname && (
          <p className="text-red-400 text-xs mt-1">Fullname is required</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 text-sm font-medium">Email</label>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/20 focus-within:ring-2 ring-green-400">
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793...Z" />
            <path d="M15 6.954 8.978 9.86...Z" />
          </svg>
          <input
            type="email"
            className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-400"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">Email is required</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/20 focus-within:ring-2 ring-green-400">
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M14 6a4 4...Z" />
          </svg>
          <input
            type="password"
            className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-400"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && (
          <p className="text-red-400 text-xs mt-1">Password is required</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block mb-1 text-sm font-medium">Confirm Password</label>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/20 focus-within:ring-2 ring-green-400">
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M14 6a4 4...Z" />
          </svg>
          <input
            type="password"
            className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-400"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: true,
              validate: validatePasswordMatch,
            })}
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-red-400 text-xs mt-1">
            {errors.confirmPassword.message || "Passwords do not match"}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400 underline hover:text-green-300"
          >
            Login
          </Link>
        </p>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</>

  );
}

export default Signup;
