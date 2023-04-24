import { Link, useRouteError } from "react-router-dom"

function CarrerError() {
    const error=useRouteError();
  return (
    <div className="career-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to='/'>Back To The Home Page</Link>

      
    </div>
  )
}

export default CarrerError
