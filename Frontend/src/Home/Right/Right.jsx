import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './TypeSend'
import { useAuth } from '../../context/AuthProvider'

const Right = () => {
  const [authUser, setAuthuser] = useAuth();
  return (
    <div className='w-[70%] bg-slate-950 text-white'>
      <ChatUser />
      <div className='user-scroll overflow-y-auto' style={{maxHeight:"calc(100vh - 20vh"}}>
      <Messages />
      </div>
      <TypeSend />
    </div>
  )
}

export default Right 