import { useState } from "react";
import Steps from './Steps'


function Project() {
    const [projectName, setProjectName] = useState("");
    const [inputValue, setInputValue] = useState(""); 
    const [projectDesc, setProjectDesc] = useState("");
    const [descValue, setDescValue] = useState(""); 

    const btnClick = () => {
        setProjectName(inputValue); 
    };

    if (projectName === "") {
        return (
            <>
                <h3>Enter project name:</h3>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <h3>Enter project description:</h3>
                <input
                    value={descValue}
                    onChange={(e) => setDescValue(e.target.value)}
                />
                <button onClick={btnClick}>Submit</button>
            </>
        );
    }

    return (
        <div>
            <h1>{projectName}</h1>
            <h3>{descValue}</h3>
            <Steps/>
        </div>
    );
}

export default Project;
