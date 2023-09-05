import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    //zone de rafraichissement des composants de la route
    <Outlet/>
  )
}

export default Layout