import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from '../components/Layouts/PublicLayout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegisterPage'

const AppRoutes = () => {
  return (
    <div>
        <Router>
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
            </Routes>   
        </Router>
    </div>
  )
}

export default AppRoutes
