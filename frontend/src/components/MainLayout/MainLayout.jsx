import React from 'react'
import TestNav from '../NavBar/TestNav'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function MainLayout() {
  return (
    <>
    <TestNav />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout