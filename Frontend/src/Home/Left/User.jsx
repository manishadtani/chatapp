import React from 'react'
import useGetAllUser from '../../Pages/useGetAllUser'

const User = () => {
  const [allUsers, loading] = useGetAllUser()
  console.log(allUsers)
  return (
    <div className='chat-box flex items-center mt-3 hover:bg-slate-900 duration-150 cursor-pointer'>


    <div className="w-23 py-2">
      <img className='ml-5 w-14 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>

    <div className='text-sm text-slate-300'>
      <h3>Manish</h3>
      <span>manishadtani@gmail.com</span>
    </div>


  </div>
  )
}

export default User