import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? " chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="p-4">
    <div className={`chat ${chatName}`}>
      <div className={`chat-bubble text-white ${chatColor} px-4 py-2 rounded-lg shadow-md max-w-[80%] transition-transform duration-200 hover:scale-102`}>
        {message.message}
      </div>
      <div className="chat-footer text-gray-400 text-xs mt-1">
        {formattedTime}
      </div>
    </div>
  </div>
  
  );
}

export default Message;
