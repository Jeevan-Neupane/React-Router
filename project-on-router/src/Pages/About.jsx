import { useState } from "react"
import { Navigate } from "react-router-dom";


function About() {
  const [user,setUser]=useState('mario');

  const logOutUser=()=>{
    setUser(null);

  }


  if(!user){
    return <Navigate to='/' replace/>
  }

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla eveniet optio voluptas iste quasi, laborum, voluptatibus laudantium nostrum repellat commodi beatae est natus atque facilis expedita corporis, odit repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque numquam, laborum eius doloremque sequi voluptate amet quisquam dolor! Beatae accusantium, quo distinctio in blanditiis architecto similique culpa, possimus officia dolores voluptates repellat voluptas ex id deleniti? Ex, ducimus autem odio maxime vero saepe repellendus, beatae sit natus quidem dolorum.
      <button onClick={logOutUser}>
        Log Out

      </button>
    </div>
    
  )
}

export default About
