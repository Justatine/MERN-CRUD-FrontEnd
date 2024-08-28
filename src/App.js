import React from 'react'
import AppRoutes from './assets/routes/AppRoutes'
import AdminRoutes from './assets/routes/AdminRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import StudentRoutes from './assets/routes/StudentRoutes'
export default function App() {
  return (
    <Router>
      <AppRoutes/>
      <AdminRoutes/>
      <StudentRoutes/>
    </Router>
  )
}
