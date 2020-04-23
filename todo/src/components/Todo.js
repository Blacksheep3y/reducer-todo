import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer";
import '../css/todo.css';

const Todo = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        e.preventDefault();
        setNewTodo(e.target.value);
        // console.log('E VALUE: ', e.target.value)
      };

    // const addTodo = (e, todo) => {
    //     e.preventDefault();

    //     const newtodo = {
    //       item: todo,
    //       completed: false,
    //       id: Date.now()
    //     };
    
        // dispatch({
        //     initialTodoState: [...initialTodoState, newtodo]
        // });
    //   };
    
    const submitTodo = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", 
                   payload: newTodo });
      };

    //1:25:55

    return (
        <div>
            
            <h1>TO DOs: </h1>
                <ul className="todo-container">
                    {/* <li>{todoState.map(x => <div>{x.item}</div>)}</li> */}
                    <li>{initialTodoState.item}</li>
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
            {/* <div>
                <form>
                    <input
                        type="text"
                        name="todo"
                        value={"todo"}
                        onChange={handleChanges}
                    />
                    <button>Add</button>
                </form>
                {!todoState.completed ? (
                    <div>
                        {todoState.item}{" "}
                        <button
                            onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
                        >
                        </button>
                    </div>
                ) : (
                    <div className="todo-completed">{todoState.item}</div>
                )}
            </div> */}
        </div>
    );
};

export default Todo;