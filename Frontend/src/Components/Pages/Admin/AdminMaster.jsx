import React from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import Footer from '../../Footer/Footer'
import { Outlet } from 'react-router-dom'

function AdminMaster() {
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default AdminMaster
