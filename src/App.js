import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import ThemeContext, { themes } from "./context/theme-context";

import { Button } from "@material-ui/core";

import { onSnapshot } from "firebase/firestore";
import { todoCollectionRef } from "./firebase";
import { setTodo } from "./components/store/actions/todoActions";

function App() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  useEffect(() => {
    onSnapshot(todoCollectionRef, (snapshot) => {
      dispatch(
        setTodo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    });
  }, []);
  
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Button
          variant="outlined"
          color="primary"
          className="btn_change-theme"
          onClick={toggleTheme}
        >
          Change theme
        </Button>
        <TodoForm />
        <TodoList theme={theme} todos={todos} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
