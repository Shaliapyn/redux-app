import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";

import styles from "./TodoForm.module.css";
import ThemeContext from "../../context/theme-context";

import { addDoc } from "firebase/firestore";
import { todoCollectionRef } from "../../firebase";


const TodoForm = ({filter}) => {

  const [inputVal, setInputVal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      title: inputVal.toUpperCase(),
      id: Date.now().toString(),
      isCompleted: false,
    };
    await addDoc(todoCollectionRef, newTodo);
    setInputVal("");
  };
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
          value={inputVal.toUpperCase()}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <div className={styles.btnsFlex}>
          <Button type="submit" variant="outlined" color="primary">
            Add Todo
          </Button>
          <select onChange={filter} name="" id="">
            <option value="completed">completed</option>
            <option value="Not completed">Not completed</option>
            <option  value="All" selected>All</option>
          </select>
          
         
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
