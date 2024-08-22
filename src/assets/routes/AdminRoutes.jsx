import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from '../components/Layouts/AdminLayout'
import Dashboard from '../pages/Admin/Dashboard'
import Add from '../pages/Admin/Add'
import Edit from '../pages/Admin/Edit'

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
            <Route path='/admin/add-student' 
                element={
                    <AdminLayout>
                        <Add/>
                    </AdminLayout>
                }>
            </Route>
            <Route path='/admin/edit-student/:idno' 
                element={
                    <AdminLayout>
                        <Edit/>
                    </AdminLayout>
                }>
            </Route>
        </Routes>
      </Router>
    </div>
  )
}
