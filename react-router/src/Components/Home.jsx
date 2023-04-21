

import { useNavigate } from "react-router-dom"
const Home = () => {

 const navigate= useNavigate();
  return (
    <>
    <div>Home Page</div>
    <button className="bg-emerald-600" onClick={()=>navigate('order-summary')}>Place Order</button>
    </> 
  )
}

export default Home
