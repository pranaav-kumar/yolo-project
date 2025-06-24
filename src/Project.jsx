import { useState } from "react";
import Steps from './Steps'


function Project() {
    const [projectName, setProjectName] = useState("");
    const [inputValue, setInputValue] = useState(""); 
    const [descValue, setDescValue] = useState(""); 

    const btnClick = () => {
        setProjectName(inputValue);
        setDescValue(descValue);
    };

    if (projectName === "") {
        return (
            <>
                <h3>Enter project name:</h3>
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <h3>Enter project description:</h3>
                <input
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
