import React from 'react';
import User from './User';
import useGetAllUser from '../../context/userGetAllUser';

const UsersMessage = () => {
  const [allUsers, loading] = useGetAllUser()
  console.log(allUsers)
  return (
    <div className="avatar online">
      <div className="message w-full bg-slate-900">
        <h2 className='text-white font-semibold px-5 py-2'>Messages</h2>
      </div>
      <div className='user-scroll overflow-y-auto w-full' style={{ height: 'calc(100vh - 28vh)' }}>
        {allUsers.map((props)=> (
            <User props={props} />
        ))}
        
      
      </div>
    </div>
  );
};

export default UsersMessage;
