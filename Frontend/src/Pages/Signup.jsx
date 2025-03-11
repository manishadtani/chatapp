import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    const navigate = useNavigate()

  const onSubmit = (data) => {
    const userInfo = {
        fullname:data.fullname,
        email:data.email,
        password:data.password,
        confirmPassword:data.confirmPassword
    }
    axios.post("http://localhost:3000/user/createUser", userInfo)
    .then((res)=>{
            console.log(res.data)
            if(res.data){
              alert('Signup Successfully')
            }
            localStorage.setItem("chatty",JSON.stringify(res.data.token))
            navigate("/")
    })
    .catch((error) => {
      console.log(error);  // Yeh error ka pura structure dikhayega
      if (error.response) {
        // console.log(error.response.data?.message)
          alert("Error: " + (error.response.data?.message || "Something went wrong"));
      } else if (error.request) {
          alert("No response from server. Please try again.");
      } else {
          alert("Error: " + error.message);
      }
  });
  
    
    // console.log(userInfo)
  }
  const password = watch("password");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-96 bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-purple-400">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              {...register("fullname", { required: "Full name is required" })}
              placeholder="Enter your full name"
              className="w-full p-2 bg-gray-800 rounded text-white focus:ring-2 focus:ring-purple-500"
            />
            {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 rounded text-white focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="w-full p-2 bg-gray-800 rounded text-white focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === password || "Passwords do not match",
              })}
              placeholder="Confirm your password"
              className="w-full p-2 bg-gray-800 rounded text-white focus:ring-2 focus:ring-purple-500"
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
          </div>
          <button className="w-full p-2 bg-purple-600 rounded text-white font-bold hover:bg-purple-700">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-purple-400 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;