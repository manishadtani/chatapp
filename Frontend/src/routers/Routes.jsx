import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'

const AppRoutes = () => {
    return (
        <>
            <Routes>
            {/* <Route path='/' element={< />} /> */}
                <Route path="/" element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </>
    )
}

export default AppRoutes