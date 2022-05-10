import { SET_TODOS } from "../types/types"


export const setTodo = (todos) => {
    return {
        type: SET_TODOS,
        payload: todos
    }
}