import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import ErrorIcon from '@material-ui/icons/Error';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FastfoodIcon from '@material-ui/icons/Fastfood';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
}));


function NoPathMatch() {
  const classes = useStyles();  

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: 'darkblue'}} >
        <Toolbar>
          <Avatar className={classes.avatar} style= {{ marginRight: '10px', borderRadius: '20px', backgroundColor: '#14b814'}}>
            <FastfoodIcon style={{fill: '#786010'}} />
          </Avatar>
          <Typography className={classes.title} variant="h6" noWrap >
            Save Food
          </Typography>
        </Toolbar>
      </AppBar>

      <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
        <ErrorIcon style= {{  display: 'flex', alignSelf: 'center', fill: 'red', marginRight: '10px'}} fontSize="large" />
        <Typography variant="h4">
            Page not found! Please Login or Signup.
        </Typography>
      </Box>
      <Link to={'/login'} size="small" color="primary" >
        <Button color="primary" variant="contained" style={{ marginTop: '15px'}} >Log In</Button>
      </Link>
      <Link to={'/signup'} size="small" color="primary" style={{ marginLeft: '10px'}} >
        <Button color="primary" variant="contained" style={{ marginTop: '15px'}} >Sign Up</Button>
      </Link>

    </div>
  );
}

export default NoPathMatch
