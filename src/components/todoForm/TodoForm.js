import React, { useState } from "react";

import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";

import styles from "./TodoForm.module.css";
import { addTodo } from "../store/actions/todoActions";

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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        sx={{ pr: 3 }}
        id="outlined-basic"
        label="write down To-do"
        variant="outlined"
        style={{ width: "100%" }}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
