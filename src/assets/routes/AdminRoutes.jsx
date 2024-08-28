import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../components/Layouts/AdminLayout'
import Dashboard from '../pages/Admin/Dashboard'
import Add from '../pages/Admin/Add'
import Edit from '../pages/Admin/Edit'

export default function AdminRoutes() {
  return (
    <Routes>
        <Route exact path='/admin' 
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
        <Route path='/admin/edit-student/:id' 
            element={
                <AdminLayout>
                    <Edit/>
                </AdminLayout>
            }>
        </Route>
    </Routes>
  )
}
