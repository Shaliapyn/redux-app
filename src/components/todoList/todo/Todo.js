import React from 'react'

import styles from "./Todo.module.css"

import { Card, Container, IconButton, Button } from '@material-ui/core'
import { CardContent } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Delete } from "@material-ui/icons"


import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/actions/todoActions';

const Todo = ({todo}) => {
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(removeTodo(id))
    }
  return (
    <div>
        <Container>
            <Card variant="outlined" style = {{ marginTop: 35, background:"primary"}}>
                <CardContent  className={styles.todoFlex}>
                        <CardContent>
                            <Typography variant='h5' component="h3" align="center">{todo.title}</Typography>
                        </CardContent>
                        <CardContent className={styles.buttonsFlex}>
                        <Button variant="outlined">Edit</Button>
                            <IconButton onClick={() => handleRemove(todo.id)} style={{ float: "right" }}>
                                <Delete style={{ color: "red" }}/>
                            </IconButton>
                        </CardContent>
                        
                </CardContent>
            </Card>
        </Container>
    </div>
  )
}

export default Todo