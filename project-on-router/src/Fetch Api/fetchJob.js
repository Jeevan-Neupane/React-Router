
const careerLoaders=async()=>{
    const response=await fetch('http://localhost:4000/careers');
    if(!response.ok){
        throw Error('Could find the Data');
    }
    return response.json();
    
}

const careerDetails=async({params})=>{
    const {id}=params;
    const response=await fetch('http://localhost:4000/careers/'+id)
    

    if(!response.ok){
        throw Error("Couldn't find that career");
    }
    return response.json();
}


export default careerLoaders;
export {careerDetails};