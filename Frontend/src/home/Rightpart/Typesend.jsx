import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex items-center space-x-3 h-[8vh] bg-gray-800 px-4 py-2 rounded-lg">
      <div className="w-full sm:w-[70%]">
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        />
      </div>
      <button
        type="submit"
        className="p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
      >
        <IoSend className="text-3xl text-white" />
      </button>
    </div>
  </form>
  
  );
}

export default Typesend;
