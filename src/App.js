import { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import ThemeContext, {themes}  from "./context/theme-context";

import { Button } from "@material-ui/core";

function App() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const [theme, setTheme] = useState(themes.dark)

 const toggleTheme = () => {
   theme === themes.dark ? 
   setTheme(themes.light) :
   setTheme(themes.dark)
 } 
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Button variant="outlined" color="primary" className="btn_change-theme" onClick={toggleTheme}>Change theme</Button>
        <TodoForm />
        <TodoList theme={theme} todos={todos} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
