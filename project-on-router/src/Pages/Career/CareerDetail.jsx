import { useLoaderData, useParams } from "react-router-dom"

function CareerDetail() {
    const {id}=useParams();
    const career=useLoaderData();

  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location:{career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi quod neque minus exercitationem odio necessitatibus illum id consequuntur, ducimus, doloremque error perspiciatis pariatur, modi iusto placeat! Rem, pariatur fugit?</p>
        </div>
        
      
    </div>
  )
}

export default CareerDetail
