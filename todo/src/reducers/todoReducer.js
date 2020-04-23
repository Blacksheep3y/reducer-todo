export const initialTodoState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const todoReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                item: action.payload,
                id: Date.now()
            }
    }
    
    // if (action.type === "TOGGLE_COMPLETED") {
    //     return {
    //         ...state,
    //         completed: !state.completed
    //     };
    // }

    return state;
};