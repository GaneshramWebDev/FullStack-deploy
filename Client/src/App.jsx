import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import VerifyEmail from './Pages/verifyEmail'
import ResetPassword from './Pages/ResetPassword'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className='text-xl '>
      <ToastContainer />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/VerifyEmail" element={<VerifyEmail/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>

        </Routes>
    </div>
  )
}

export default App