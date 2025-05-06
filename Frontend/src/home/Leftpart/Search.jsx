import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <div className="h-[10vh] flex items-center justify-center">
  <div className="w-full max-w-3xl px-6">
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-3">
        {/* Input Box */}
        <label className="border border-white rounded-md px-4 py-2 flex items-center gap-2 w-full bg-transparent">
          <input
            type="text"
            className="grow outline-none bg-transparent text-white placeholder:text-gray-400"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md duration-300"
        >
          <FaSearch className="text-2xl" />
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

export default Search;
