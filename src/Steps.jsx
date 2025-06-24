import { useState } from 'react';
import CreateSteps from './CreateSteps';

function Steps(){
    const [steps,setSteps] = useState(0);
    const [control,setControl] = useState(false);
    const [stepVal,setStepVal] = useState([]);

    const addSteps= () =>{
        setControl(true);
        setSteps(steps + 1);
    }

    const handleSubmit =(stepData)=>{
        setStepVal([...stepVal, stepData]);
        setControl(false);
    }

    return(
        <div>
            <h3>Add steps:</h3>
            <button onClick={addSteps}>+</button>

            {control && <CreateSteps onSubmit={handleSubmit}/>} 
            
            {(steps==0) ? 

            <p>you dont have any steps</p>

            :

            <>
            <h3>steps: </h3>
            {stepVal.map((step,index)=>(
                <div>
                    <h4>step {index+1} : {step.name}</h4>
                    <p>description : {step.description}</p>
                    <p>mandatory: {step.mandatory ? 'yes' : 'no'}</p>
                </div>
            ))}
            </>
            }
            
        </div>
    );
}

export default Steps