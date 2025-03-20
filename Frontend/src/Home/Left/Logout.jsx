import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from 'axios'
import cookies from 'js-cookie'

import { BiLogOut } from "react-icons/bi";
const Logout = () => {
  const [loading, setLoading] = useState(true)
  const handleLogout = async ()=>{
    try {
     const response = await axios.post("http://localhost:3000/user/logout")
     localStorage.removeItem('chatty')
     cookies.remove('jwt')
     setLoading(false)
     alert("Logout succesfully")
     window.location.reload(); 
    } catch (error) {
        console.log("Error in logout "+error)
    }
   
  }
  return (
   <div className="h-[5vh] flex gap-1">
        <BiLogOut onClick={handleLogout} className="text-2xl mt-3 w-10 h-10 cursor-pointer hover:bg-slate-900 rounded-full p-2"/><h3 className="text-white pt-5 ">Logout</h3>
   </div>
  );
};

export default Logout;
