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

    return(
        
        projectName === '' ? 

        <>
                <div className="container mt-5"></div>
                <h3>Enter project name:</h3>
                <input
                className="form-control mb-3"
                placeholder="Project name"
                onChange={(e) => setInputValue(e.target.value)}
                />

                <h3>Enter project description:</h3>
                <input
                className="form-control mb-3"
                placeholder="Project description"
                onChange={(e) => setDescValue(e.target.value)}
                />
                <button className="btn btn-primary" onClick={btnClick}>Create</button>
            </>
            
        :

        <div>
        <h1>{projectName}</h1>
        <h3>{descValue}</h3>
        <Steps/>
        </div>
        
);
}

export default Project;
