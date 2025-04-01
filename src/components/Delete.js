import React from 'react'
import NavBar from './Navbar'
import Button from '@material-ui/core/Button';
import { useHistory, useRouteMatch } from "react-router-dom";
import { deleteItem } from '../Api'

const Delete = () => {
    const history = useHistory()
    const match = useRouteMatch()

    const handleYes = async() => {
        await deleteItem(match.params.id)
        history.push('/list')
    }
    const handleNo = () => {
        history.push('/list')
    }
    return (
        <div>
            <NavBar />
            <h1>Are you sure ?</h1>
            <Button variant="contained" color="primary" type="submit" onClick={handleYes}>Yes</Button>
            <Button variant="contained" color="secondary" type="submit" onClick={handleNo} >No</Button>

        </div>
    )
}

export default Delete
