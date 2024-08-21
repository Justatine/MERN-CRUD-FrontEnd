import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from '../components/Layouts/AdminLayout'
import Dashboard from '../pages/Admin/Dashboard'
import Add from '../pages/Admin/Add'

export default function AdminRoutes() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/admin/' 
                element={
                    <AdminLayout>
                        <Dashboard/>
                    </AdminLayout>
                }>
            </Route>
            <Route exact path='/admin/add-student' 
                element={
                    <AdminLayout>
                        <Add/>
                    </AdminLayout>
                }>
            </Route>
        </Routes>
      </Router>
    </div>
  )
}
