import React from 'react'
import {  TextField,Button,Input,Typography} from '@mui/material';
import { makeStyles} from '@mui/styles';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const useStyle=makeStyles({
    field:{
        marginTop:'20',
        maginBottom:'20',
        display:'block'
    }
})
export default function Write() {
    const classes=useStyle();
    return (
        <div style={{marginTop:'60px',marginLeft:'25px',padding:'10px'}}>
            <Typography variant="h4" component="div" color="secondary">Create Post</Typography>
            <TextField required id="outlined-required" color="secondary" label="Title" style={{marginTop:'20px',marginBottom:'20px',display:'block'}} fullWidth/>
            <TextField required id="outlined-required" color="secondary" label="Description" multiline fullWidth rows={4} style={{marginTop:'20px',marginBottom:'20px',display:'block'}}/>
            <label htmlFor="contained-button-file" style={{marginTop:'20px',marginBottom:'20px',display:'block'}}>
            <Input accept="image/*" id="contained-button-file" multiple type="file" style={{display:'none'}}/>
            <Button variant="text" color="success" component="span" startIcon={<FileUploadIcon />} size="small" style={{textTransform:'capitalize'}}>
                Upload Files
            </Button>
            </label>
            <img src="./3.jpg" alt="pic" style={{height: '500px',borderRadius: '20px',display: 'block'}}/>
            <Button variant="contained" color="success" style={{marginTop:'20px',marginBottom:'20px'}} endIcon={<ArrowForwardIosIcon/>}>
                Send
            </Button>

        </div>
    )
}
