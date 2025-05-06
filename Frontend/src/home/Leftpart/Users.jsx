import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div className="h-[82vh] flex flex-col">
  {/* Header */}
  <h1 className="px-6 py-3 text-white font-bold text-xl bg-slate-900 rounded-md shadow-md mb-2">
    Messages
  </h1>

  {/* Scrollable User List */}
  <div
    className="flex-1 overflow-y-auto space-y-2 px-4 py-2 bg-slate-800 rounded-md"
    style={{ maxHeight: "calc(84vh - 4rem)" }} // Matches visual balance
  >
    {allUsers.map((user, index) => (
      <User key={index} user={user} />
    ))}
  </div>
</div>

  );
}

export default Users;
