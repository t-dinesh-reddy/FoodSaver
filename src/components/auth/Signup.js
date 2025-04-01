import React, { useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon   from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import coverImg from '../assets/signupcover.jpeg'
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import firebase from "firebase/app"
require('firebase/database');



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '1000px 780px',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));



function Signup() {

  const classes = useStyles();
  const emailRef = useRef()
  const passwordRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const history = useHistory()
  const [ loginStatus, setLoginStatus ] = useState({})
  const [open, setOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()

    const domain = emailRef.current.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g)[0].substring(emailRef.current.value.length - 7, emailRef.current.value.length)
    if(firstNameRef.current.value.length !== 0 && lastNameRef.current.value.length !== 0 && 
      emailRef.current.value.length !== 0 && passwordRef.current.value.length !== 0){

      if(domain === "gsu.edu"){
          firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            setOpen(true);
            // Signed up 
            const user = userCredential.user;
            firebase.database().ref('users/' + user.uid ).set({
              Firstname:firstNameRef.current.value,
              Lastname:lastNameRef.current.value,
              Email: emailRef.current.value,
              Password: passwordRef.current.value
            })
            .then(() => {
              localStorage.setItem('auth_id',JSON.stringify(user.uid));
              setLoginStatus({ msg: "Signing Up.....", authSuccess: "yes" })
              setTimeout(() => {
                setOpen(false);
                history.push("/")
              }, 2000)
            })
          })
          .catch((error) => {
            const errorMessage = error.message;
            setLoginStatus({ msg: errorMessage,  authSuccess: "no" })

          });
        }else{
          setLoginStatus({ msg: "Please use @gsu.edu email!",  authSuccess: "no" })
        }

    }
    else{
      setLoginStatus({ msg: "Please fill all of the fields!",  authSuccess: "no" })
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className ={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            { loginStatus.authSuccess === "yes" && <Alert severity="success"> { loginStatus.msg }</Alert> }
            { loginStatus.authSuccess === "no" && <Alert severity="error"> { loginStatus.msg }</Alert> }
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="text"
              id="firstname"
              label="First Name"
              name="firstname"
              autoFocus
              inputRef={firstNameRef}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="text"
              autoFocus
              inputRef={lastNameRef} 
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef} 
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef} 
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loginStatus.authSuccess === "yes"  ? <CircularProgress color="secondary"/>  : "Sign Up" }
            </Button>
            <Grid container style= {{ display: 'flex',  justifyContent: 'space-between'}}>
              <Grid item>
                <span>Already have an account ? </span>
                <Link href="/login" variant="body2">
                  {"Login"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}

            // onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
      >

        <Fade in={open}>

        <div className={classes.paper2}>
          <h2 id="transition-modal-title">Signing Up...</h2>
            <div>
              <CircularProgress  /> 
            </div>         
        </div>
        </Fade>
    
      </Modal>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      
    </Grid>    
  );
}

export default Signup