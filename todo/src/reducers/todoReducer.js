export const initialTodoState = { 
    todo: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
]
};

export const todoReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":

            return {
                ...state,
                todo: [...state.todo, action.payload]
            };

        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todo: state.todo.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed,
                        } 
                    } else {
                        return task
                    }
                })
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todo: state.todo.filter(task => {
                    if (task.completed === true) {
                        return null
                    } else {
                        return task
                    }
                })
            }
            default: 
            return state
    };
    //Switch case for completed todo will incorporate maybe display none, if TOggle_completed is set on the TODO.
};