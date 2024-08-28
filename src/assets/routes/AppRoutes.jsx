import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../components/Layouts/PublicLayout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegisterPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' 
        element={
            <PublicLayout>
                <HomePage/>
            </PublicLayout>
        }>
        </Route>
        <Route path='/signin' element={
            <PublicLayout>
                <LoginPage/>
            </PublicLayout>
        }>
        </Route>
        <Route path='/signup' element={
            <PublicLayout>
                <RegisterPage/>
            </PublicLayout>
        }>
        </Route>
        <Route path='/signout'></Route>
    </Routes> 
  )
}

export default AppRoutes
