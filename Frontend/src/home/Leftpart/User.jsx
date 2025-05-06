import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import profile from "../../../public/user.jpg";
function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
    className={`rounded-lg duration-300 ${
      isSelected ? "bg-slate-700" : "hover:bg-slate-600"
    } cursor-pointer`}
    onClick={() => setSelectedConversation(user)}
  >
    <div className="flex items-center space-x-4 px-6 py-3">
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-12 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
          <img src={profile} alt="Profile" />
        </div>
      </div>
      <div className="text-white">
        <h1 className="font-semibold text-lg">{user.fullname}</h1>
        <span className="text-sm text-gray-400">{user.email}</span>
      </div>
    </div>
  </div>
  
  );
}

export default User;
