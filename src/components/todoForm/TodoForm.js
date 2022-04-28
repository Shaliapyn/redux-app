import React, { useContext, useState } from "react";

import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";

import styles from "./TodoForm.module.css";
import { addTodo } from "../store/actions/todoActions";
import ThemeContext from "../../context/theme-context";

const TodoForm = () => {
const [inputVal, setInputVal] = useState("")

const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
            title: inputVal,
            id: Date.now().toString()
    };
    dispatch(addTodo(newTodo))
    setInputVal("")
}
  const theme = useContext(ThemeContext)
  return (
    <div className={styles.formContainer} style={theme}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        required
        placeholder="Write down your todo"
        inputProps={{ style: theme}}
        className={styles.input}
        sx={{ pr: 3 }}
        id="standard-basic" variant="outlined"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <Button type="submit" variant="outlined" color="primary">
        Add Todo
      </Button>
    </form>
    </div>
    
  );
};

export default TodoForm;
