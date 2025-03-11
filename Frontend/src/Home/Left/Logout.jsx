import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
const Logout = () => {
  return (
   <div className="h-[5vh] flex gap-1">
        <BiLogOut className="text-2xl mt-3 w-10 h-10 cursor-pointer hover:bg-slate-900 rounded-full p-2"/><h3 className="text-white pt-5 ">Logout</h3>
   </div>
  );
};

export default Logout;
