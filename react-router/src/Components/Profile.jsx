import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router';

function Profile() {
    const auth=useAuth();
    const navigate=useNavigate();
    const handleLogOut=()=>{
        auth.logout();
        navigate('/')
        
    }

  return (
    <div>
    Welcome {auth.user}
    <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Profile
