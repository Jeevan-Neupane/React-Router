
const careerLoaders=async()=>{
    const response=await fetch('http://localhost:4000/careers');

    return response.json();
    
}

const careerDetails=async({params})=>{
    const {id}=params;
    const response=await fetch('http://localhost:4000/careers/'+id)
    return response.json();
}

export default careerLoaders;
export {careerDetails};