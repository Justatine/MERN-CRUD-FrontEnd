import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const StudentLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
            {children}
        <Footer/>
    </div>
  )
}

export default StudentLayout
