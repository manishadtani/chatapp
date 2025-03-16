import React from 'react'

const User = ({props}) => {
  console.log(props)
  return (
    <div className='chat-box flex items-center mt-3 hover:bg-slate-900 duration-150 cursor-pointer'>


    <div className="w-23 py-2">
      <img className='ml-5 w-14 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>

    <div className='text-sm text-slate-300'>
      <h3>{props.fullname}</h3>
      <span>{props.email}</span>
    </div>


  </div>
  )
}

export default User