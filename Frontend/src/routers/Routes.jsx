import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import { useAuth } from '../context/AuthProvider'
import Left from '../Home/Left/Left'
import Right from '../Home/Right/Right'

const AppRoutes = () => {
    const [authUser, setAuthuser] = useAuth()
    return (
        <>
            <Routes>
                <Route path="/" element={
                    authUser ? (<div className="flex h-screen">
                        <Left />
                        <Right />
                    </div>) : (
                        <Navigate to={'/login'} />
                    )
                } />
                <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <Signup />} />
                <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </>
    )
}

export default AppRoutes