import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer";
import '../css/todo.css';

const Todo = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        e.preventDefault();
        setNewTodo(e.target.value);
      };
    
    const submitTodo = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", 
                   payload: newTodo });
      };

    return (
        <div>     
            <h1>TO DOs: </h1>
            <ul className="todo-container">
                {/* <li>{todoState.map(x => <div>{x.item}</div>)}</li> */}
                <li>{todoState.item}</li>
            </ul>
            <form>
                <input
                type="text"
                name="newTodo"
                value={newTodo}
                onChange={handleChanges}
                />
                <button onClick = {submitTodo}> Add </button>
            </form>
        </div>
    );
};

export default Todo;     //1:25:55