import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

 
const Login =  () => {
  const [authUser, setAuthuser] = useAuth();
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit =async (data) => {
    const userInfo = {
      email:data.email,
      password:data.password
    }

    await axios.post("http://localhost:3000/user/loginUser", userInfo, {withCredentials:true})
    .then((res)=>{
          // console.log(res.data.message)
          if(res.data){
            alert('Login Successfully')
          }
          localStorage.setItem("chatty",JSON.stringify(res.data))
          setAuthuser(res.data)
          navigate("/")
    })
    .catch((error)=>{
      if (error.response) {
        // console.log(error.response.data?.message)
          alert("Error: " + (error.response.data?.message || "Something went wrong"));
      } else if (error.request) {
          alert("No response from server. Please try again.");
      } else {
          alert("Error: " + error.message);
      }
    })
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-96 bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-purple-400">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 rounded text-white focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full p-2 bg-gray-800 rounded text-white focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && <span className="text-red-600">This field is required</span>}
          </div>
          <button className="w-full p-2 bg-purple-600 rounded text-white font-bold hover:bg-purple-700">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account? <Link to="/signup" className="text-purple-400 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;