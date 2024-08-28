import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentLayout from '../components/Layouts/StudentLayout'
import Page from '../pages/Student/Page'

export default function StudentRoutes() {
  return (
    <Routes>
        <Route exact path='/student'
        element={
            <StudentLayout>
                <Page/>
            </StudentLayout>
        }
        />
    </Routes>
  )
}
