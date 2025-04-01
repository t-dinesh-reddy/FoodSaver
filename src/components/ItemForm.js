import React, { useState } from 'react'
import NavBar from './Navbar'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createItem } from "../Api.js";
import { useForm } from "react-hook-form";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ItemForm = ({ todo, onSubmit }) => {
    const classes = useStyles();


    // useForm react hook
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "", dateOfExpiry: new Date()},
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });



    return (
        <div>
            <Container maxWidth="lg">
                <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
                <Typography variant="h3" component="h3">
                    Add Item
                </Typography>

                <div>
                <TextField required id="standard-required" label="Item Name"
                ref={register} />
                </div>
                <div>
                <TextField
                    id="standard-multiline-static"
                    label="Description"
                    multiline
                    rows={2}
                    defaultValue=""
                    required
                    ref={register}
                />
                </div>
                <div>
                <Button variant="contained" color="secondary" type="submit">Add</Button>
                </div>
                </form>
            </Container>
        </div>
    )
}

export default ItemForm
