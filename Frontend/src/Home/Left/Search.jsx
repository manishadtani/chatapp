import React from "react";
import { IoIosSearch } from "react-icons/io";

const LeftSidebar = () => {
  return (
    <div className="bg-black text-white p-4 pb-1">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">Chats</h2>

      {/* Search Bar */}
      <div className="relative flex items-center mb-4">
        <input
          type="text"
          className="w-full p-2 pl-4 pr-10 bg-gray-800 text-white rounded-lg focus:outline-none"
          placeholder="Search"
        />
        <IoIosSearch className="absolute right-3 text-gray-400 text-xl cursor-pointer" />
      </div>

      {/* Chat List Placeholder */}
      <div className="h-full bg-gray-900 rounded-lg"></div>
    </div>
  );
};

export default LeftSidebar;
