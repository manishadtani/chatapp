import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-slate-900 text-gray-300 h-full flex flex-col">
    <div className="flex-1 overflow-hidden">
      {!selectedConversation ? (
        <div className="flex justify-center items-center h-full">
          <NoChatSelected />
        </div>
      ) : (
        <>
          <Chatuser />
          <div
            className="flex-1 overflow-y-auto px-4 py-2"
            style={{ maxHeight: "calc(92vh - 8vh)" }}
          >
            <Messages />
          </div>
          <Typesend />
        </>
      )}
    </div>
  </div>
  
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className="relative">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5 top-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex h-screen items-center justify-center px-4">
        <div className="text-center max-w-xl px-4 py-6 bg-slate-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-white mb-4">
            Welcome{" "}
            <span className="text-xl font-bold text-indigo-400">
              {authUser.user.fullname}
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            No chat selected, please start a conversation by selecting someone
            from your contacts.
          </p>
        </div>
      </div>
    </div>
  </>
  
  );
};
