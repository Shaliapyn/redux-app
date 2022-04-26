import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../types/types"

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}
export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id
    }
}