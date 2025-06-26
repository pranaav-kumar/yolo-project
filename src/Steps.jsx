import { useState } from 'react';
import CreateSteps from './CreateSteps';
import { useNavigate } from 'react-router-dom';

function Steps() {

    const [control, setControl] = useState(false);
    const [stepVal, setStepVal] = useState([]);

    const navigate = useNavigate();

    const addSteps = () => {
        setControl(true);
    };

    const handleSubmit = (stepData) => {
        setStepVal([...stepVal, { ...stepData, activities: [] }]);
        setControl(false);
    };



    return (
        <div className="conatiner mt-4">
            <h3 className="mb-3"> Add steps:</h3>
            <button className="btn btn-outline-success me-2" onClick={addSteps}>+</button>
            {control && <CreateSteps onSubmit={handleSubmit} />}
            
            <br> </br>

            <button className="btn btn-primary" onClick={()=>navigate('/steps',{ state: { stepArr: stepVal } })}>STEPS</button>

        </div>
    );
}
export default Steps;