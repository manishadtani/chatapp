import React from 'react';
import User from './User';

const UsersMessage = () => {
  return (
    <div className="avatar online">
      <div className="message w-full bg-slate-900">
        <h2 className='text-white font-semibold px-5 py-2'>Messages</h2>
      </div>
      <div className='user-scroll overflow-y-auto w-full' style={{ height: 'calc(100vh - 28vh)' }}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default UsersMessage;
