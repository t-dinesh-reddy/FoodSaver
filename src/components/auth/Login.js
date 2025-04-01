import React, { useRef, useState } from "react"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom"
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import logo from '../assets/logincover.png'
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import firebase from "firebase/app"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '850px 790px',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  paper2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Login() {
  
  const classes = useStyles();
  const emailRef = useRef()
  const passwordRef = useRef()
  // const [error, setError] = useState("")
  // const [loading, setLoading] = useState(false)
  const [ loginStatus, setLoginStatus ] = useState({})
  const [open, setOpen] = useState(false);
  const history = useHistory()
  
  async function handleFormSubmit(e) {
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
      setOpen(true);
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('auth_id',JSON.stringify(user.uid));
      setLoginStatus({ msg: "Signing In.....", authSuccess: "yes" })

    })
    .then(() => {
      setTimeout(() => {
          setOpen(false);
          history.push("/home")
      }, 3000)
    })
    .catch((error) => {
      var errorMessage = error.message;
      setLoginStatus({ msg: errorMessage,  authSuccess: "no" })
    });

  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DoubleArrowIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleFormSubmit} >
            { loginStatus.authSuccess === "yes" && <Alert severity="success"> { loginStatus.msg }</Alert> }
            { loginStatus.authSuccess === "no" && <Alert severity="error"> { loginStatus.msg }</Alert> }

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
              {loginStatus.authSuccess === "yes" ? <CircularProgress color="secondary"/>  : "Sign In" }
            </Button>
            <Grid container style= {{ display: 'flex',  justifyContent: 'space-between'}}>
              <Grid item >
                <Link href="#" variant="body2">
                  Forgot password ?
                </Link>
              </Grid>
              <Grid item>
                <span>Don't have an account ? </span>
                <Link href="/signup" variant="body2">
                  {"SignUp"}
                </Link>
              </Grid>
            </Grid>
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
          <h2 id="transition-modal-title">Signing In...</h2>
            <div>
              <CircularProgress  /> 
            </div>         
        </div>
        </Fade>
    
      </Modal>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login