import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "../../App.css";
import TodoForm from "../todoForm";
import TodoList from "../todoList";
import { setTodo } from "../store/actions/todoActions";
import ThemeContext, { themes } from "../../context/theme-context";

import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'

import {
  onSnapshot,
  limit,
  query,
  orderBy,
  getDocs,
  where,
} from "firebase/firestore";
import { auth, todoCollectionRef } from "../../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";

function MainTodo() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [howBigLimit, setHowBigLimit] = useState(5);

  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

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

  const filter = async (e) => {
    switch (e.target.value) {
      case "All":
        const all = query(todoCollectionRef, limit(howBigLimit));
        const data = await getDocs(all);
        dispatch(
          setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        break;
      case "Not completed":
        const completed = query(
          todoCollectionRef,
          where("isCompleted", "==", false),
          limit(howBigLimit)
        );
        const data1 = await getDocs(completed);
        dispatch(
          setTodo(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        break;
      case "completed":
        const notCompleted = query(
          todoCollectionRef,
          where("isCompleted", "==", true),
          limit(howBigLimit)
        );
        console.log(notCompleted)
        const data2 = await getDocs(notCompleted);
        dispatch(
          setTodo(data2.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        break;
      default:
    }
  };

  const showMore = () => {
    setHowBigLimit(howBigLimit + 5);
  };
  const logOut = () => {
    signOut(auth).then(() => navigate("/SignIn"));
  }
  return (
    <div className="App">
      <button onClick={logOut}>LogOut</button>
      <h2 className="currentUser">Current User {user && user}</h2>
      <ThemeContext.Provider value={theme}>
        <Button
          variant="outlined"
          color="primary"
          className="btn_change-theme"
          onClick={toggleTheme}
        >
          Change theme
        </Button>
        <TodoForm filter={filter} howBigLimit={howBigLimit} />
        <TodoList theme={theme} todos={todos} />
        <div className="show-more">
          <button onClick={showMore}>show more</button>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default MainTodo