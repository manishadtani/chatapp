import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../../public/user.jpg";
function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // console.log(selectedConversation.fullname);
  return (
    <div className="relative flex items-center justify-between gap-4 h-[8%] bg-slate-800 hover:bg-slate-700 duration-200 rounded-md px-4">
  <label
    htmlFor="my-drawer-2"
    className="btn btn-ghost drawer-button lg:hidden absolute left-5 transition-transform transform hover:scale-105 duration-200"
  >
    <CiMenuFries className="text-white text-xl" />
  </label>
  
  <div className="flex items-center justify-start gap-3 h-[8vh] bg-slate-900 hover:bg-slate-700 px-4 py-2 rounded-md transition-all duration-200">
    <div className="avatar online">
      <div className="w-16 rounded-full overflow-hidden border-2 border-gray-600">
        <img src={profile} className="object-cover transition-all duration-200" />
      </div>
    </div>
    
    <div className="text-white">
      <h1 className="text-lg font-medium">{selectedConversation.fullname}</h1>
      <span className="text-sm text-gray-400">
        {getOnlineUsersStatus(selectedConversation._id)}
      </span>
    </div>
  </div>
</div>


  
  );
}

export default Chatuser;
