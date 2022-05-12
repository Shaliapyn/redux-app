import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { setTodo } from "./components/store/actions/todoActions";
import ThemeContext, { themes } from "./context/theme-context";

import { Button } from "@material-ui/core";

import { onSnapshot, limit, query, orderBy } from "firebase/firestore";
import { todoCollectionRef } from "./firebase";

function App() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [howBigLimit, setHowBigLimit] = useState(5);

  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  useEffect(() => {
    const limitTodoCollectionRef = query(
      todoCollectionRef,
      orderBy("title"),
      limit(howBigLimit)
    );
    onSnapshot(limitTodoCollectionRef, (snapshot) => {
      dispatch(
        setTodo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    });
  }, [howBigLimit]);

  const showMore = () => {
    setHowBigLimit(howBigLimit + 5)
  };
  // const showLess = () => {
  //   setHowBigLimit(prev => prev < 0 ? 0 : prev - 5)
  // };

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
        <TodoForm howBigLimit={howBigLimit} />
        <TodoList theme={theme} todos={todos} />
        <div className="show-more">
          <button onClick={showMore}>show more</button>
          <button onClick={showLess}>show less</button>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
