import { useState } from 'react';
import CreateSteps from './CreateSteps';

function Steps() {
    const [steps, setSteps] = useState(0);
    const [control, setControl] = useState(false);
    const [stepVal, setStepVal] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const addSteps = () => {
        setControl(true);
        setSteps(steps + 1);
    };

    const handleSubmit = (stepData) => {
        setStepVal([...stepVal, { ...stepData, activities: [] }]);
        setControl(false);
    };

    const toggleStep = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const addActivity = (index) => {
        const updatedSteps = [...stepVal];
        updatedSteps[index].activities.push(`Activity ${updatedSteps[index].activities.length + 1}`);
        setStepVal(updatedSteps);
    };

    return (
        <div>
            <h3>Add steps:</h3>
            <button onClick={addSteps}>+</button>
            {control && <CreateSteps onSubmit={handleSubmit} />}

            {steps === 0 ? (
                <p>You don't have any steps</p>
            ) : (
                <>
                    <h3>Steps:</h3>
                    {stepVal.map((step, index) => (
                        <div key={index}>
                            <h4
                                onClick={() => toggleStep(index)}>
                                Step {index + 1}: {step.name}
                            </h4>

                            {activeIndex === index && (
                                <div>
                                    <p>Description: {step.description}</p>
                                    <p>Mandatory: {step.mandatory ? 'Yes' : 'No'}</p>
                                    <div>
                                        <p>Activity:</p>
                                        <button
                                            onClick={() => addActivity(index)}>+</button>
                                        <div>
                                            {step.activities.map((act, i) => (
                                                <li key={i}>{act}</li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
export default Steps;