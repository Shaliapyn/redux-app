import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";

import styles from "./TodoForm.module.css";
import ThemeContext from "../../context/theme-context";
import { addDoc, where, query, getDocs } from "firebase/firestore";
import { todoCollectionRef } from "../../firebase";
import { useDispatch } from "react-redux";
import { setTodo } from "../store/actions/todoActions";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const [toggleTodo, setToggleTodo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      title: inputVal,
      id: Date.now().toString(),
      isCompleted: false,
    };
    await addDoc(todoCollectionRef, newTodo);
    setInputVal("");
  };
  const hideCompleted = async () => {
    setToggleTodo(!toggleTodo);
      const completed = query(
        todoCollectionRef,
        where("isCompleted", "==", false)
      );
      const data = await getDocs(completed);

      dispatch(
        setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };
  const showCompleted = async () => {
    setToggleTodo(!toggleTodo);
    const data = await getDocs(todoCollectionRef);

      dispatch(
        setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  }
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.formContainer} style={theme}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          required
          placeholder="Write down your todo"
          inputProps={{ style: theme }}
          className={styles.input}
          sx={{ pr: 3 }}
          id="standard-basic"
          variant="outlined"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div className={styles.btnsFlex}>
          <Button type="submit" variant="outlined" color="primary">
            Add Todo
          </Button>
          {toggleTodo ? (
            <Button
              onClick={hideCompleted}
              type="button"
              variant="outlined"
              color="primary"
            >
              Hide completed
            </Button>
          ) : (
            <Button
              onClick={showCompleted}
              type="button"
              variant="outlined"
              color="primary"
            >
              Show All
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
