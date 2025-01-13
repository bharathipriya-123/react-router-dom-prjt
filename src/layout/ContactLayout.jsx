import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../components/Contact'

export default function ContactLayout() {
  return (
    <div>
        <Contact/>
        <Outlet/>
    </div>
  )
}
