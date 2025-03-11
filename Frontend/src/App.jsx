import React from 'react'
import Left from './Home/Left/Left.jsx'
import Right from './Home/Right/Right.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import AppRoutes from './routers/Routes.jsx'


const App = () => {
  return (
    <>
    <AppRoutes />
    {/* <div className="flex h-screen">

    <Left />
      <Right />

    </div> */}
        {/* <Signup /> */}
        {/* <Login /> */}
    </>
  )
}

export default App