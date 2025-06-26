import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Showsteps(){
    
    const navigate = useNavigate();
    const location = useLocation();
    const stepArr = location.state?.stepArr || [];

    const [activeIndex, setActiveIndex] = useState(null);


    const addActivity = () => {
        navigate('/sample');
    };

        const toggleStep = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return(
        <>
        {stepArr.length === 0 ? (
                <p>You don't have any steps</p>
            ) : (
                <>
                    {stepArr.map((step, index) => (
                        <div key={index}>
                            <h4 onClick={() => toggleStep(index)}>
                                Step {index + 1}: {step.name}
                            </h4>

                            {activeIndex === index && (
                                <div>
                                    <p>Description: {step.description}</p>
                                    <p>Mandatory: {step.mandatory ? 'Yes' : 'No'}</p>
                                    <p>Activity:</p>
                                    <button onClick={() => addActivity()}>+</button>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}

            <button onClick={()=>navigate(-1)}>back</button>
        </>
    );
}

export default Showsteps