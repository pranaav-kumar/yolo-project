import Steps from './Steps'
import { useState } from 'react';

function CreateSteps({onSubmit}){

    const [stepName,setStepName] = useState();
    const [stepDesc,setStepDesc] = useState();
    const [isMandatory,setIsMandatory] = useState();

    const handleClick = () => {
        onSubmit();
        showSteps();
};

    const showSteps = () =>{
        
    }

    return(
    <div>
        <h1>Create steps:</h1>
        <h4>step name:</h4>
        <input onChange={(e) => setStepName(e.target.value)}></input>
        <h4>Description:</h4>
        <input onChange={(e)=> setStepDesc(e.target.value)}></input>
        <h4>Mandatory:</h4>
        <input type="checkbox" onChange={(e)=> setIsMandatory(e.target.checked)}></input>
        <button onClick={handleClick}>submit</button>
    </div>
    );
}

export default CreateSteps