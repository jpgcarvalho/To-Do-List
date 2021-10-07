import React from "react";
import { useParams, useHistory } from "react-router-dom";


import Button from "../Button/Button";

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    const history = useHistory()

    const handleBackButtonClick = () => {
        history.goBack()

    }

    return(
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi error dolorum corporis nihil doloribus, odit, possimus vel eum facere impedit maxime. Voluptatem quisquam rerum, vitae molestiae adipisci atque qui? Odio.</p>
            </div>
        </>
    )
}

export default TaskDetails