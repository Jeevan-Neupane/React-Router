import React from 'react'
import { Outlet } from 'react-router'

function Admin() {
  return (
    <div>
      Admin
      <Outlet/>
    </div>
  )
}

export default Admin
