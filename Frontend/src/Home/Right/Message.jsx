import React from 'react'

const Message = () => {
  return (
    <div className="user-scroll flex flex-col gap-4 p-4">
    {/* Left Side Chat */}
    <div className="flex justify-start">
        <div className="chat chat-start bg-violet-600 text-white p-3 rounded-lg max-w-[60%]">
            <div className="chat-bubble text-white">You were the Chosen One!</div>
            <div className="chat-footer text-xs opacity-50">10:10</div>
        </div>
    </div>

    {/* Right Side Chat */}
    <div className="flex justify-end">
        <div className="chat chat-end bg-gray-300 text-black p-3 rounded-lg max-w-[60%]">
            <div className="chat-bubble bg-gray-300 text-black">I loved you.</div>
            <div className="chat-footer text-xs opacity-50 text-right">1:00</div>
        </div>
    </div>
</div>
  )
}

export default Message