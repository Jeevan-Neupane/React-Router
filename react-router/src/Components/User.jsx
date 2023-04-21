import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import ShowActiveUsers from './ShowActiveUsers';

function User() {
    const [searchParams,setSearchParams]=useSearchParams();
    const showActiveUsers=searchParams.get('filter');
    console.log(showActiveUsers)
  return (
    <div>
      <Link to='1'>user 1</Link>
      <Link to='2'>user 2</Link>
      <Link to='3'>user 3</Link>
      <Outlet/>
      <div className='py-4 px-3 bg-slate-400'>
        <button onClick={()=>setSearchParams({filter:'active'})} className='mr-2'>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers?<ShowActiveUsers/>:<h1>Showing All Users</h1>
        
      }
    </div>
  )
}

export default User
