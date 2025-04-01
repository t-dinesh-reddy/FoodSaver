import React from 'react'
import { CssBaseline, Grid, makeStyles, Box, Container, Button, TextField, Typography, IconButton, Paper, Avatar} from '@material-ui/core'
import food from './assets/food.png';
import food2 from './assets/food2.png';
import food3 from './assets/food3.png';
import food4 from './assets/food4.png';
import bannerPicture from './assets/BannerPage.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EcoIcon from '@material-ui/icons/Eco';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(theme => ({
    root:{
     minHeight: '100vh'
    },
    navbar:{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        width: '100%',
        padding: '0 5%',
        display: 'flex',
        height: '10vh',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: 'darkblue',
        zIndex: '10'
    },
    header:{
        display: 'flex',
        alignItems: 'center'
    },
    navBtnContainer:{
        display: 'flex',
        alignItems: 'center'
    },
    navbtn:{
        margin: '2px',
        padding: '2px',
        fontSize: 'clamp(8px, 4vw, 14px)'
    },
    banner:{
        position: 'relative',
        top: '60px',
        height: '90vh',
        width: '100%',
        backgroundColor: 'black',
        backgroundImage: `url(${bannerPicture})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace'
    },
    overlay:{
        position: 'absolute',
        backgroundColor: 'white',
        opacity: '0.6',
        height: '90vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '2'
    },
    mainBanner:{
        height:'80vh',
        width: '100%',
        display: 'flex',
        zIndex: '5',
        padding: '0 10%'
    },
    bannerContent1:{
        width: '50%',
        heigth: '80vh',
        display: 'flex',
        zIndex: '8',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    bannerContent2:{
        width: '50%',
        heigth: '80vh',
        display: 'flex',
        zIndex: '8',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    box:{
        width: '100%',
        height: '300px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    boxText:{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        padding: '0 30px 0 30px'
    },
    PhotoContain:{
        maxHeight: '100%',
        maxWidth: '100%'
    },
    footer:{
        backgroundColor: 'darkblue',
        position: 'relative',
        top: '12vh',
        paddingBottom: '20px'
    },
    footerBox1:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '320px',

        color: 'white',
        padding: '10px',
        flexDirection: 'column'
    },
    footerBox2:{
        display: 'flex',
        height: '320px',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px',
        justifyContent: 'center',
    },
    footer_heading:{
        fontSize: '40px',
        fontWeight: '700'
    },
    textfield:{
        backgroundColor: 'white',
        marginBottom: '10px',
        marginTop: '20px',
        width: '60%'
    },
    textfieldmessage:{
        width: '60%',
        backgroundColor: 'white',
        marginBottom: '10px'
    }
}))


export default function Visit() {
    
    const classes = useStyle();
    const [email, setemail] = React.useState("");
    const [emailLabel, setEmailLabel] = React.useState("Email")
    const [context, setcontext] = React.useState("");
    const [validEmail, setValidEmail] = React.useState(false)
    const emailcheck = /^[a-z0-9._\-+]+@[a-z]+\.([a-z]{2}\.)?[a-z]{2,3}$/;
    const history = useHistory();


    const emailHandler = (e) =>{
        setemail(e.target.value);
    };
    const contexthandler = (e) => {
        setcontext(e.target.value);
    };
    const submitHandler = (e) => {
         e.preventDefault();
        if(!emailcheck.test(email)){
            setValidEmail(true);
            setEmailLabel("Enter a valid Email.")
            return;
        }
        else{
            setValidEmail(false);
            setEmailLabel("Email")
        }

        //After all processing at the end
        setemail("");
        setcontext("")
    }
    const signInHandler = () =>{
        history.push('./login');
    }
    const signUpHandler = () =>{
        history.push('./signup');
    }

    return (
        <div>
            <Box component="div" className={classes.root}>
            <CssBaseline />
            
            {/* Nav Bar */}
            
            
            <Box className={classes.navbar}>
                <Box component="div" className={classes.header}>
                    <Avatar style={{marginRight: '5px', backgroundColor:'white'}}>
                        <FastfoodIcon style={{fill: '#002884'}}/>
                    </Avatar>
                    <Typography variant="h5" style={{fontWeight: '500px', color: 'white', fontSize: 'clamp(20px, 5vw, 32px)'}}>Save Food</Typography>
                </Box>
                <Box component='div' className={classes.navBtnContainer}>
                    <Button variant="contained"  className={classes.navbtn} onClick={signUpHandler}>Sign up</Button>
                    <Button variant="contained"  color="secondary" className={classes.navbtn} onClick={signInHandler}>Sign In</Button>
                </Box>
            </Box>


            {/* Main Page Banner */}
            
            <Box component="div" className={classes.banner}>
                <Box component="div" className={classes.overlay}></Box>
                    <Box component="div" className={classes.mainBanner}>
                        <Box component="div" className={classes.bannerContent1}>
                                <h1 style={{fontSize: 'clamp(8px, 8vw, 32px)'}}>#ZEROWASTE</h1>
                                <span style={{lineHeight: '0.9', fontSize: 'clamp(14px, 2vw, 18px)'}}>
                                    <span style={{fontWeight: '900'}}>Help us</span> to,<br/>
                                    <span style={{fontWeight:"900", lineHeight: '1', fontSize: 'clamp(14px, 20vw, 84px)'}}>SAVE</span><br/><span style={{fontWeight:"900", lineHeight: '1', fontSize: 'clamp(14px, 20vw, 84px)'}}>  FOOD</span><br/><br/>
                                    to create<br/><br/> a <span style={{fontWeight: '900'}}>better future.</span>
                                </span>
                                <br/>
                                <p  style={{fontSize: 'clamp(14px, 2vw, 18px)'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                        </Box>
                        <Box component="div" className={classes.bannerContent2}>
                                <h1 style={{color: '#3f51b5', fontWeight: '900', textAlign: 'right', lineHeight: '0.75'}}>
                                    REDUCE<br/>
                                    <span style={{textAlign: 'left', color: 'black', fontSize: 'clamp(8px, 8vw, 32px)'}}>WASTE</span><br/><br/>
                                    SAVE<br/>
                                    <span style={{textAlign: 'left', color: 'black', fontSize: 'clamp(8px, 8vw, 32px)'}}>FOOD</span><br/><br/>
                                    SHARE<br/>
                                    <span style={{textAlign: 'left', color: 'black', fontSize: 'clamp(8px, 8vw, 32px)'}}>HAPPINESS</span>
                                </h1>
                                <IconButton aria-label="twitter picture" style={{color: 'black'}} component="span">
                                    <TwitterIcon/>
                                </IconButton>
                                <IconButton aria-label="Instagram picture" style={{color: 'black'}} component="span">
                                    <InstagramIcon/>
                                </IconButton>
                        </Box>
                    </Box>
            </Box>

            {/* Content and Information */}
            <Container fixed style={{position: 'relative', top: '12vh'}}>
                    <Grid container direction="column">
                        <Grid item container>    
                                <Grid item md={6} sm={12} xs={12}>
                                    <Box component="div" className={classes.box}>
                                        <Box component="div" className={classes.boxText} >
                                            <h1>Who we are?</h1>
                                            <p>We are Non-profit Organization with ambition to reduce food wastage. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui </p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <Box component="div" className={classes.box}>
                                        <img  alt="People Donating things" src={food} className={classes.PhotoContain}/>
                                    </Box>
                                </Grid>
                        </Grid>
                        <Grid item container direction="row-reverse">    
                                <Grid item md={6} sm={12} xs={12}>
                                    <Box component="div" className={classes.box}>
                                        <Box component="div" className={classes.boxText} >
                                            <h1>Where will your given food will go?</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui </p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <Box component="div" className={classes.box}>
                                        <img alt="Donation Bag" src={food2} className={classes.PhotoContain}/>
                                    </Box>
                                </Grid>
                        </Grid>
                        <Grid item container>    
                                <Grid item md={6} sm={12} xs={12}>
                                    <Box component="div" className={classes.box}>
                                        <Box component="div" className={classes.boxText} >
                                            <h1>Become A Member!</h1>
                                            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                                <p>Join now! What are you waiting for?</p>
                                            </div>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <Box component="div" className={classes.box}>
                                        <img alt="join Us" src={food3} className={classes.PhotoContain}/>
                                    </Box>
                                </Grid>
                        </Grid>
                        <Grid item container direction="row-reverse">    
                                <Grid item md={6} sm={12} xs={12}>
                                    <Box component="div" className={classes.box}>
                                        <Box component="div" className={classes.boxText} >
                                            <h1>Security</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui </p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12} >
                                    <Box component="div" alt="Security" className={classes.box}>
                                        <img src={food4} alt="security assurance" className={classes.PhotoContain}/>  
                                    </Box>
                                </Grid>
                        </Grid>
                    </Grid>
            </Container>
        {/* Footer Starts here */}
        <Grid container className={classes.footer}>
                <Grid item  md={6} sm={12} xs={12}>
                    <div className={classes.footerBox1}>
                        <p><span className={classes.footer_heading}>Save Food</span> <br />And say Good Bye to Waste</p>
                        <Paper style={{width: 'auto', marginBottom: '5px', padding: '5px 8px 5px 5px', display: 'flex', justifyContent: 'space-around', borderRadius: '20px',alignItems: 'center'}}>
                            <EcoIcon />
                                <Typography variant="subtitle2">Save Environment</Typography>
                        </Paper>
                        <Paper style={{width: 'auto', marginBottom: '5px', padding: '5px 8px 5px 5px', display: 'flex', justifyContent: 'space-around', borderRadius: '20px',alignItems: 'center'}}>
                            <LocalDiningIcon />
                                <Typography variant="subtitle2">Eat Healthy</Typography>
                        </Paper >
                        <Paper style={{width: 'auto', marginBottom: '5px', padding: '5px 8px 5px 5px', display: 'flex', justifyContent: 'space-around', borderRadius: '20px',alignItems: 'center'}}>
                            <FavoriteIcon />
                                <Typography variant="subtitle2">Share with Friends</Typography>
                        </Paper>
                    </div>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <form onSubmit={submitHandler} autoComplete="off">
                    <div className={classes.footerBox2}>
                        <span style={{color: 'white'}} className={classes.footer_heading}>Leave Feedback</span>
                        <TextField
                        error={validEmail}
                        label={emailLabel}
                        variant='filled'
                        required
                        value={email}
                        className={classes.textfield}
                        onChange={emailHandler}
                        style={{height: '50px'}}
                        />
                        <TextField
                        label='Message us'
                        multiline
                        required
                        value={context}
                        rows={4}
                        variant='filled'
                        onChange={contexthandler}
                        className={classes.textfield && classes.textfieldmessage}
                        />
                        <div>
                            <Button variant='contained' type="submit">Submit</Button>
                        </div>
                    </div>
                    </form>
                </Grid>
        </Grid>
        </Box>
        </div>
    )
}


/*image referecnce Links:
   1. <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>
   2. <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>
   3. <a  href="http://www.freepik.com">Designed by pch.vector / Freepik</a>
   4. <a href='https://www.freepik.com/vectors/clouds'>Clouds vector created by vectorjuice - www.freepik.com</a>
*/
