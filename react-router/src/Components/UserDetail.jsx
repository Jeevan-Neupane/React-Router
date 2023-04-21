import React from 'react'
import { useParams } from 'react-router'

function UserDetail() {
 const params= useParams();
 const userId=params.userId;
  return (
    <div>
      Detail About User {userId}
    </div>
  )
}

export default UserDetail
