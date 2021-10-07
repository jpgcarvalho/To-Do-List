import React, { useState } from "react";
import './AddTask.css'
import Button from "../Button/Button";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)

    }
    
    const handleAddTaskClick= () => {
        if(inputData === ""){
            return window.alert('Nome da tarefa é necessário para adicioná-la na lista')
        }
        handleTaskAddition(inputData)
        setInputData("")
    }
    
    return (
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                className="add-task-input"
                type="text"
                value={inputData}
                required
             />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask