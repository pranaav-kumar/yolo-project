import { useState } from 'react';
import CreateSteps from './CreateSteps';

function Steps(){
    const [steps,setSteps] = useState(0);
    const [control,setControl] = useState(false);

    const addSteps= () =>{
        setControl(true);
        setSteps(steps + 1);
    }

    const handleSubmit =()=>{
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
            <h2>Steps:</h2>}

        </div>
    );
}

export default Steps