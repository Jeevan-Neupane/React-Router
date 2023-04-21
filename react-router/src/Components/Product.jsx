import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function Product() {

    function activeLink({isActive}){
        return {
              fontWeight:isActive?'bold':'normal',
        }
        
    }
  return (
    <>
      <input type='search' placeholder='search product' className='border'/>


      <nav className='m-2 py-4 px-3 bg-slate-400 '>
        <NavLink to='feature' className='mr-2' style={activeLink}>Feature</NavLink>
        <NavLink to='new' style={activeLink}>New Product</NavLink>

      </nav>
      <Outlet/>

    </>
  )
}

export default Product
