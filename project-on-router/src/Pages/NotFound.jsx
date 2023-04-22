import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error deserunt tenetur quas iusto asperiores molestiae, mollitia eius qui impedit accusamus sint? Vitae quaerat, consequuntur perspiciatis reiciendis nobis id doloremque.</p>


      <p>Go to the <Link to='/'>Home</Link>.</p>
    </div>
  )
}

export default NotFound
