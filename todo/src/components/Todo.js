import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer";
import '../css/todo.css';

const Todo = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        setNewTodo(e.target.value);
      };
    
    return (
        <div>     
            <h1>TO DOs: </h1>
            <div>
                {todoState.todo.map((item, index) => (
                    <div key={item.id} onClick={() => dispatch({ type: 'TOGGLE_COMPLETED' , payload: item.id})} className={`${item.completed === true ? 'completed': ""}`}>
                    <div>{item.task}</div>
                    </div>
                ))}
            </div>
            <form>
                <label htmlFor="newTodo"> 
                <input
                id="newTodo"
                type="text"
                name="newTodo"
                value={newTodo}
                onChange={handleChanges}
                />
                </label>
            </form>
            <button onClick={ () => dispatch({ type: 'ADD_TODO' , payload: {
                    task: newTodo,
                    id: Date.now(),
                    Completed: false
                }},
                setNewTodo(''))}>Add ToDo</button>
            <button onClick={ () => dispatch({ type: 'CLEAR_COMPLETED'})}>CLEAR</button>
        </div>
    );
};

export default Todo;