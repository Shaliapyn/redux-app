
import { SET_TODOS } from "../types/types"

const initialValue = {
    todos: []
}

export const todoReducer = (state = initialValue, action) => {
    switch(action.type) {
        case SET_TODOS:
                return {
                    ...state,
                  todos: action.payload
                }
       
        default: return state;
    }
}