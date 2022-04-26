import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../types/types"

const initialValue = {
    todos: []
}

export const todoReducer = (state = initialValue, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        // case EDIT_TODO:
        //     return {
        //         ...state, 
        //             todos: 
        //     }
        default: return state;
    }
}