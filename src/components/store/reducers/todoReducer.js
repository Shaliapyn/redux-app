import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../types/types"

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
        case EDIT_TODO: 
        const updatedTodo = state.todos.map(todo => todo.id === action.payload.id ? ({
            ...todo,
            title: action.payload.title
        }) : todo)
            return {
                ...state,
                todos: updatedTodo
            }
       
        default: return state;
    }
}