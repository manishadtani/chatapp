import React from 'react'
import Search from './Search'
import UsersMessage from './UsersMessage'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='w-[30%] bg-black text-white'>
      <Search />
      <UsersMessage />
      <Logout />
    </div>
  )
}

export default Left