import {useState} from 'react'
import { useAuth } from './auth';
import { useNavigate ,useLocation} from 'react-router-dom';

function Login() {

    const [user,setUser]=useState('');
    const auth= useAuth()
    const navigate=useNavigate();
    const location=useLocation();

    const setUserName=(event)=>{
        setUser(event.target.value)

    }
    const redirect=location.state?.path || '/';
    const handleLogin=()=>{
        auth.login(user);
        navigate(redirect,{replace:true});
    }
  return (
    <div>
        <label>Username:
            <input type='text' onChange={setUserName}/>
        </label>
        <button className="button is-success" onClick={handleLogin}>Login</button>

      
    </div>
  )
}

export default Login
