import React,{useState} from 'react'
import {  TextField,Button,Input,Typography} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Write() {
    const [title,setTitle]=useState('');
    const [titleerr,setTitleerr]=useState(false);

    const [description,setDescription]=useState('');
    const [descriptionerr,setDescriptionerr]=useState(false);

    const [file,setFile]=useState('');

    const getTitle=(e)=>{
        if(e.target.value==''){
            setTitleerr(true)
        }
        else{
            setTitle(e.target.value)
            setTitleerr(false)

        }
    }

    const getDescription=(e)=>{
        if(e.target.value==''){
            setDescriptionerr(true)
        }
        else{
            setDescription(e.target.value)
            setDescriptionerr(false)
        }
    }
    const getFile=(e)=>{
        setFile(e.target.files[0])
    }
    return (
        <div style={{marginTop:'60px',marginLeft:'25px',padding:'10px'}}>
            <Typography variant="h4" component="div" color="secondary">Create Post</Typography>
            <TextField required id="outlined-required" color="secondary" label="Title" style={{marginTop:'20px',marginBottom:'20px',display:'block'}} fullWidth onChange={getTitle} error={titleerr} helperText={titleerr ? 'Kindly enter title' :''}/>
            <TextField required id="outlined-required" color="secondary" label="Description" multiline fullWidth rows={4} style={{marginTop:'20px',marginBottom:'20px',display:'block'}} onChange={getDescription} error={descriptionerr} helperText={descriptionerr ? 'Kindly enter description' :''}/>
            <label htmlFor="contained-button-file" style={{marginTop:'20px',marginBottom:'20px',display:'block'}}>
            <Input accept="image/*" id="contained-button-file" multiple type="file" style={{display:'none'}} onChange={getFile}/>
            <Button variant="text" color="success" component="span" startIcon={<FileUploadIcon />} size="small" style={{textTransform:'capitalize'}}>
                Upload Files
            </Button>
            </label>
            {file ? <img src={URL.createObjectURL(file)} alt="pic" style={{height: '500px',borderRadius: '20px',display: 'block'}}/> : null}
            <Button variant="contained" color="success" style={{marginTop:'20px',marginBottom:'20px'}} endIcon={<ArrowForwardIosIcon/>}>
                Send
            </Button>

        </div>
    )
}
