import React from 'react'

const ChatUser = () => {
    return (
        <div className='flex gap-7 hover:bg-slate-800 items-center text-slate-400 w-full pl-10 bg-slate-900 h-[10vh]'>
            <div className="avatar avatar-online">
                <div className="w-14 rounded-full">
                    <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            <div className="details">
                <h3 className='text-xl text-cyan-50'>Manish</h3>
                <h4 className='text-sm text-cyan-500'>Offline</h4>
            </div>
        </div>
    )
}

export default ChatUser