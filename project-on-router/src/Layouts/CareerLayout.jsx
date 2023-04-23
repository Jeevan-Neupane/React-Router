import React from 'react'
import { Outlet } from 'react-router-dom'

function CareerLayout() {
  return (
    <div className='careers-layout'>
      <h2>Careers</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, officia.</p>
      <Outlet/>
    </div>
  )
}

export default CareerLayout
