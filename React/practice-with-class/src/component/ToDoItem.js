import React from 'react'
import {FaTrashAlt} from "react-icons/fa";

const ToDoItem = ({taskItem}) => {
    return (
        <div>
            <h2>{taskItem.toDoItem} <FaTrashAlt /></h2>
            <p>{taskItem.dueDate}</p>
        </div>
    )
}

export default ToDoItem
