import { redirect } from "react-router-dom";

const contactAction=async({request})=>{
    //*request will have all of the form data
    const data=await request.formData();
    
    const submission={
        email:data.get('email'),
        message:data.get('message'),
    }

    console.log(submission);

    if(submission.message.length<=10){
        return {
            error:'Message must be over 10 character long'
        }
    }

    return redirect('/help')


}
export default contactAction;