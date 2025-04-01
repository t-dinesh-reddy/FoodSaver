import React, { useState } from 'react'
import NavBar from './Navbar'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createItem } from "../Api.js";
import { useHistory } from "react-router-dom";
import { app } from "../firebase.js"
import firebase from 'firebase'
import ImageIcon from '@material-ui/icons/Image';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '250px',
    },
    input: {
        display: "none"
    }
  },
  adjust:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      top: '10vh',
      height: '90vh',
      backgroundColor: 'red'
  },
  contentWrapper:{
        maxWidth: '480px',
        border: '1px solid lightgrey',
        borderRadius: '10px',
        margin: '0 auto',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center'
  },
  cont:{
    marginTop: '30px', 
    marginBottom: '20px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  input: {
        display: 'none',
  },
  uploadBtn: {
    width: '250px', 
    height:'47px'
  }
}));

const db = app.firestore()
const storage = app.storage()


const Add = () => {
    
    const classes = useStyles();
    const history = useHistory();
    const [ itemName, setItemName ] = useState("");
    const [ itemDescription, setItemDescription ] = useState("");
    const [ expiryDate, setExpiryDate ] = useState(new Date().toISOString());
    const [ calories, setCalories ] = useState(0)
    const [ fats, setFats ] = useState(0)
    const [ carbs, setCarbs ] = useState(0)
    const [ protiens, setProtiens ] = useState(0)
    const [ file, setFile] = useState(undefined)
    const [ loading, setLoading ] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)

        db.collection("itemImages").doc("ShrxjbmoybsOhYTeVkNZ").update({
          images: firebase.firestore.FieldValue.arrayUnion({
            name: file.name,
            url: await fileRef.getDownloadURL()
          })
        })
        
        var itemObj 
        db.collection("itemImages").doc("ShrxjbmoybsOhYTeVkNZ").get()
        .then((doc) => {
            if (doc.exists) {
                itemObj = {title: itemName, description: itemDescription, date: expiryDate, calories: calories, fats: fats, carbs: carbs, protiens: protiens,
                requested: false, r_accepted: false, itemImageURL: doc.data().images[ doc.data().images.length - 1 ].url }
                createItem(itemObj)
                setLoading(false);  
                history.push('/list')   
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
            setLoading(false);

        });
    }

    const handleItemNameChange = (e) => {
        setItemName(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setItemDescription(e.target.value)
    }

    const handleDateTimePickerChange = (e) => {
        setExpiryDate(e.target.value)
    }

    const handleCaloriesChange = (e) => {
        setCalories(e.target.value)
    }

    const handleFatsChange = (e) => {
        setFats(e.target.value)
    }

    const handleCarbsChange = (e) => {
        setCarbs(e.target.value)
    }

    const handleProtiensChange = (e) => {
        setProtiens(e.target.value)
    }

    const onFileChange = (e) => {
        setFile(e.target.files[0])
      }

    return (
        <div>
            <NavBar />
                <Container maxWidth="lg" style={{marginTop: '35px'}}>
                    <Box component="div" className={classes.contentWrapper}>

                { loading ? 
                    <Box mt={30} >
                        <h2>Adding Item....</h2> 
                        <CircularProgress />
                    </Box>
                    :
                    <form className={classes.root} onSubmit={submitHandler}>

                            <Typography variant="h3" color="primary" style={{fontWeight: '600'}}>
                                Add  Item
                            </Typography>
                        <div>
                            <TextField 
                                required 
                                id="standard-required" 
                                label="Item Name"  
                                onChange={handleItemNameChange} 
                                value={itemName}
                                variant="outlined"
                            />

                            <TextField
                                required
                                id="fat"
                                label="Fat (g)"
                                type="number"
                                variant="outlined"  
                                onChange={handleFatsChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="standard-multiline-static"
                                label="Description"
                                multiline
                                rows={2}
                                value={itemDescription}
                                variant="outlined"
                                onChange={handleDescriptionChange}
                            />
                            <TextField
                                required
                                InputProps={{ inputProps: { min: 0, max: 10 } }}
                                id="calories"
                                label="Calories"
                                type="number"
                                variant="outlined"
                                onChange={handleCaloriesChange}
                            />
                        </div>
                        <div>
                            <TextField
                                id="datetime-local"
                                label="Expiry Date"
                                type="datetime-local"
                                defaultValue=""
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                                variant="outlined"
                                onChange={handleDateTimePickerChange}
                            />
                            <TextField
                                required
                                id="protiens"
                                label="Protein (g)"
                                type="number"
                                variant="outlined"
                                onChange={handleProtiensChange}
                            />
                            
                        </div>
                        <div>
                            <TextField
                                required
                                id="carbs"
                                label="Carbs (g)"
                                type="number"
                                variant="outlined"
                                onChange={handleCarbsChange}

                            />
                        </div>

                        <div>  
                            
                            { file === undefined ? 
                            <div>
                                <input required accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={onFileChange} />
                                <label htmlFor="icon-button-file">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        aria-label="upload picture" component="span"
                                        className={classes.uploadBtn}
                                        startIcon={<ImageIcon />}
                                        required
                                    >
                                        Upload Image
                                    </Button>
                                </label>
                            </div>
                            :
                            <div style={{ display: 'flex', justifyContent: 'center'}}>
                            <Typography variant="subtitle1">
                                { file.name }
                            </Typography>
                            <IconButton size="small" color="primary" onClick={() => setFile(undefined)}>
                                <CancelIcon style={{ fill: 'red'}} /> 
                            </IconButton>
                            </div>
                            }
                        </div>

                        <div style = {{ marginTop: '10px'}}>
                            <Button variant="contained" color="primary" type="submit">Add Item</Button>
                        </div>
                    </form>
                }
                    </Box>
                </Container>
        </div>
    )
}

export default Add
