import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <>
    <hr className="border-gray-700" />
    <div className="h-[5vh] bg-slate-900 flex items-center justify-start px-4">
      <BiLogOutCircle
        className="text-4xl text-white hover:bg-slate-700 p-2 rounded-full duration-300 cursor-pointer"
        onClick={handleLogout}
      />
    </div>
  </>
  
  );
}

export default Logout;
