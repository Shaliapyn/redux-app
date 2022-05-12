import React, { useState, useContext } from "react";


import styles from "./Todo.module.css";

import { Card, IconButton, Button, Box } from "@material-ui/core";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Delete } from "@material-ui/icons";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';

import ThemeContext from "../../context/theme-context";

import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, todoCollectionRef } from "../../firebase";

const Todo = ({ todo }) => {
  const [editInp, setEditInp] = useState(false);
  const [editInpVal, setEditInpVal] = useState("");


  const handleRemove = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc)

  };
  const saveUpdadeTodo = async (id) => {
    const updatedDoc = doc(todoCollectionRef, id);
    const newField = {title: editInpVal};
    await updateDoc(updatedDoc, newField);
    setEditInp(false)
  }
  const toggleChecked = async (id) => {
    const updatedDoc = doc(todoCollectionRef, id);
    const newField = {isCompleted: !todo.isCompleted};
    await updateDoc(updatedDoc, newField);
    
  }
  const editTodo = (todo) => {
    setEditInp(true)
    setEditInpVal(todo.title)
  }
  
  const theme = useContext(ThemeContext);
  return (
      <div className={styles.container} style={theme}>
        <Card 
          className={styles.card}
          variant="outlined"
          style={theme}
        >
          <CardContent className={styles.todoFlex}>
            <CardContent >
              {editInp ? (
                <TextField
                  sx={{ pr: 3 }}
                  variant="outlined"
                  style={{ width: "600px" }}
                  value={editInpVal}
                  onChange={(e) => setEditInpVal(e.target.value)}
                  inputProps={{ style: theme }}
                />
              ) : (
                <Typography variant="h5" component="h3" align="center">
                  {todo.title}
                </Typography>
              )}
            </CardContent>
            <CardContent className={styles.buttonsFlex}>
              {editInp ? (
                <Box spacing={1} className={styles.buttonsFlex}>
                  <Button onClick={() => saveUpdadeTodo(todo.id)} style={theme} variant="outlined">
                    Save
                  </Button>
                  <Button style={theme} onClick={() => setEditInp(false)} variant="outlined">
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button onClick={() => editTodo(todo)} style={theme} variant="outlined">
                  Edit
                </Button>
              )}
              <IconButton
                onClick={() => handleRemove(todo.id)}
                style={{ float: "right" }}
              >
                <Delete style={{color: "#851919"}} />
              </IconButton>
              <Checkbox checked={todo.isCompleted} onClick={() => toggleChecked(todo.id)}/>
            </CardContent>
          </CardContent>
        </Card>
      </div>
  );
};

export default Todo;
