
import React from 'react'

import Todo from "../todo"
import ThemeContext from "../../context/theme-context"


const TodoList = ({ todos, theme }) => {

  return (
    <>
    <ThemeContext.Provider value={theme}>
    {todos.map((todo)=> (
          <Todo todo={todo} key={todo.id}/>
      ))}
    </ThemeContext.Provider>
      
    </>
  )
}

export default TodoList