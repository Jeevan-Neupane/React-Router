import { NavLink,Outlet } from "react-router-dom"
import { useAuth } from "./auth"

function NavBar() {

    const navLinkStyle=({isActive})=>{
        return {
            fontWeight:isActive?'bold':'normal',
            
        }

    }
    const auth=useAuth();

  return (

    <nav className="py-4 px-3 bg-slate-400 ">
        <NavLink to='/' className="mr-2" style={navLinkStyle}>Home</NavLink>
        <NavLink to='/about' className="mr-2"  style={navLinkStyle}>About</NavLink>
        <Outlet/>
        <NavLink to='/product' className="mr-2"  style={navLinkStyle}>Product</NavLink>
        <NavLink to='users' style={navLinkStyle}  className="mr-2"  >Users</NavLink>
        <NavLink to='profile' style={navLinkStyle} className="mr-2"  >Profile</NavLink>
        {
          !auth.user && (
            <NavLink to='login' className="mr-2"  style={navLinkStyle}>Login</NavLink>
          )
        }
        <Outlet/>
      
    </nav>
  )
}

export default NavBar
