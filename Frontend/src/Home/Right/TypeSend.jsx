import React from 'react'
import { IoMdSend } from "react-icons/io";

const TypeSend = () => {
  return (
    <div className="flex items-end h-[10vh]" >
    
    {/* Input Box at Bottom */}
    <div className="p-2 bg-gray-900 h-14  w-full">
      <div className="flex items-center pl-5 p-2 bg-slate-800 rounded-full shadow-md max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Enter your message..."
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
        <IoMdSend className="text-white text-xl cursor-pointer hover:text-blue-400 transition mr-2" />
      </div>
    </div>
  </div>
  )
}

export default TypeSend