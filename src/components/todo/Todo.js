import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";

import styles from "./Todo.module.css";

import { Card, IconButton, Button, Box } from "@material-ui/core";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Delete } from "@material-ui/icons";
import TextField from "@mui/material/TextField";

import { removeTodo, editTodo } from "../store/actions/todoActions"
import ThemeContext from "../../context/theme-context";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [editInp, setEditInp] = useState(false);
  const [editInpVal, setEditInpVal] = useState("");

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  const handleEdit = (todo) => {
    const updatedTodo = {
      title: editInpVal,
      id: todo.id,
    };
    dispatch(editTodo(updatedTodo));
    setEditInp(false);
  };
  const clickEdit = () => {
    setEditInp(true);
    setEditInpVal(todo.title);
  };
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
                  <Button style={theme} onClick={() => handleEdit(todo)} variant="outlined">
                    Save
                  </Button>
                  <Button style={theme} onClick={() => setEditInp(false)} variant="outlined">
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button style={theme} onClick={clickEdit} variant="outlined">
                  Edit
                </Button>
              )}
              <IconButton
                onClick={() => handleRemove(todo.id)}
                style={{ float: "right" }}
              >
                <Delete style={{color: "#851919"}} />
              </IconButton>
            </CardContent>
          </CardContent>
        </Card>
      </div>
  );
};

export default Todo;
