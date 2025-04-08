/* eslint-disable no-unused-vars */

import React from 'react'

import Footer from '../components/common/footer/footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
