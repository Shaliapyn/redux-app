import React, { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";

import styles from "./TodoForm.module.css";
import ThemeContext from "../../context/theme-context";
import { addDoc } from "firebase/firestore";
import { todoCollectionRef } from "../../firebase";

const TodoForm = () => {
const [inputVal, setInputVal] = useState("")

const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
            title: inputVal,
            id: Date.now().toString(),
            isCompleted: false
    };
    await addDoc(todoCollectionRef, newTodo)
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
