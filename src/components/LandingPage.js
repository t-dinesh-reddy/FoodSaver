import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import EcoIcon from '@material-ui/icons/Eco';
import { shadows } from '@material-ui/system';
import FavoriteIcon from '@material-ui/icons/Favorite';
import cover from './assets/landingpage.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function LandingPage(props) {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Save Food</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container style={{ marginTop: '50px'}} >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Box>
              <Typography variant="h4" style={{ marginBottom: '20px'}} >
                  Save Food
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={cover} style={{ width: 400, height: 300}} ></img>
        </Grid>
        <Grid item xs={6}>
          <Box height={200} boxShadow={3} p={13} style={{ display: 'flex', alignItems: 'center', borderRadius: '20px', backgroundColor: '#fcba03'}} >
             <EcoIcon style={{ fontSize: '60px'}} /> 
            <Typography variant="h4">
                Save Environment
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
        <Box height={200} boxShadow={3} p={2} style={{ display: 'flex', alignItems: 'center', borderRadius: '20px', backgroundColor: '#fcba03'}} >
             <EcoIcon style={{ fontSize: '50px'}} /> 
            <Typography variant="h4">
                Eat Healthy
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
        <Box height={200} boxShadow={3} p={2} style={{ display: 'flex', alignItems: 'center', borderRadius: '20px', backgroundColor: '#fcba03'}} >
             <FavoriteIcon style={{ fontSize: '50px'}} /> 
            <Typography variant="h4">
                Share with Friends
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}
