import { useSelector } from "react-redux"

import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList"

function App() {

const todos = useSelector(state => state.todoReducer.todos)

  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
