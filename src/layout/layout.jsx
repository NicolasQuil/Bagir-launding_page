import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header'
const layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        </div>
  )
}

export default layout