import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer";

const Todo = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);

    return (
        <div>
            <div>{todoState.item}</div>
            <div>{todoState.completed ? " completed" : "COMPLETE!"}</div>
            <div>{todoState.id}</div>
        </div>
    );
};

export default Todo;