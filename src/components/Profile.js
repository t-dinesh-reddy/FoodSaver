import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import {
  CssBaseline,
  Typography,
  Avatar,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import firebase from "firebase/app"
import TextField from '@material-ui/core/TextField';
import dp from './assets/tomatodp.jpeg';
import Box from '@material-ui/core/Box';

require('firebase/database');


const useStyle = makeStyles((theme) => ({
  contentWrapper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '480px',
    border: '1px solid lightgrey',
    padding: '10px',
    borderRadius: '3%'
  },
  avatar: {
    width: "150px",
    height: "150px",
  },
  userName: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  textfields: {
    marginBottom: "30px",
  },
  formcontrol: {
    maxwidth: "300px",
  },
  input: {
    display: "none",
  },
}));

function Profile() {

  const classes = useStyle();
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  
  useEffect(() => {
      firebase.database().ref('users/' + JSON.parse(localStorage.getItem("auth_id"))).once("value")
      .then( (snapshot) => {
              setFirstName(snapshot.child("Firstname").val());
              setLastName(snapshot.child("Lastname").val());
              setEmail(snapshot.child("Email").val());
          }).catch((error) =>{
                console.log(error)
          })

  }, [])


  return (
    <div>
      <CssBaseline />
      <Box component="div" style={{position: 'absolute', left: 0, right: 0, top: 0}}>
      <NavBar />
      </Box>
      <Box component="div" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column',alignItems: 'center', height: '100vh'}}>
            <Typography variant="h4" color="primary" style={{marginTop: '40px', fontWeight: '700', marginBottom: '10px'}}>
              Profile
            </Typography>
        <Box component="div" className={classes.contentWrapper}>
            <Box component="div">
            <div className={classes.userProfileEdit}>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Avatar src={dp} alt="your profile"  className={classes.avatar}>
                    <Typography variant="h2">?</Typography>
                  </Avatar>
                </IconButton>
                
              </label>
            </div>
            <Typography variant="h5" className={classes.userName}>
              Welcome, { firstName }!  
              </Typography>
            </Box>

            <Box component="div">
              <div className={classes.textfields}>
                <TextField
                    id="firstnameField"
                    label="First Name"
                    value={firstName}
                    variant="outlined"
                    readOnly
                    style={{ width: 'clamp(250px, 30vw, 380px)', height: 'clamp(20px, 10vh ,40px)'}}
                  />
              </div>
              <div className={classes.textfields}>
                <TextField
                    id="lastnameField"
                    label="Last Name"
                    value={lastName}
                    variant="outlined"
                    readOnly
                    style={{ width: 'clamp(250px, 30vw, 380px)', height: 'clamp(20px, 10vh ,40px)'}}
                  />
              </div>
              <div className={classes.textfields}>
                  <TextField
                    readOnly
                    id="outlined-disabled"
                    label="Email"
                    value={email}
                    variant="outlined"
                    style={{ width: 'clamp(250px, 30vw, 380px)', height: 'clamp(20px, 10vh ,40px)'}}
                  />
              </div>
              </Box>
        </Box>
        </Box>
    </div>
  );
}

export default Profile;
