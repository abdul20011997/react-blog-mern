import React,{useState} from 'react'
import {  TextField,Button,Input,Typography,Box,CircularProgress} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { green } from '@mui/material/colors';
import Validator from "../Error/Error";
import { useHistory} from 'react-router-dom';

export default function Write() {
    const [title,setTitle]=useState('');
    const [titleerr,setTitleerr]=useState(false);
    const [description,setDescription]=useState('');
    const [descriptionerr,setDescriptionerr]=useState(false);
    const [file,setFile]=useState('');
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [loadingFetch,setLoadingFetch]=useState(false);
    const history=useHistory();
    const getTitle=(e)=>{
        if(e.target.value==''){
            setTitleerr(true)
            setLoading(true)
        }
        else{
            setTitle(e.target.value)
            setTitleerr(false)
            setLoading(false)
        }
    }

    const getDescription=(e)=>{
        if(e.target.value==''){
            setDescriptionerr(true)
            setLoading(true)
        }
        else{
            setDescription(e.target.value)
            setDescriptionerr(false)
            setLoading(false)
        }
    }
    const getFile=(e)=>{
        setFile(e.target.files[0])
    }
    const addPost=()=>{
        setLoading(true)
        setLoadingFetch(true);
        let formData = new FormData();
        const username=localStorage.getItem('id');
        formData.append('title', title);
        formData.append('desc', description);
        formData.append('photo', file);
        formData.append('username', username);



        fetch("http://localhost:4000/post/createpost",{
        body: formData,
        method: "post"
        }).then(res=>{
            setLoading(false);
            if(res.status==500){
                throw new Error('Something went wrong')
            }
            return res.json();
        }).then(data=>{
            console.log(data)
            setLoading(false);
            setLoadingFetch(false);
            if(data.message.username){
                history.push('/')
            }

        }).catch(err=>{
            setLoading(false)
            setLoadingFetch(false);
            setError(err.message)
        })


    }

    return (
        <div style={{marginTop:'60px',marginLeft:'25px',padding:'10px'}}>
            { error ? <Validator severity="error" error={error}/> : null}  
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
            {/* <Button variant="contained" color="success" style={{marginTop:'20px',marginBottom:'20px'}} endIcon={<ArrowForwardIosIcon/>} onClick={addPost}>
                Send
            </Button> */}
            <Box sx={{ m: 1, position: 'relative' }}>
            <Button  color="success" variant="contained" disabled={loading} onClick={addPost} style={{marginTop:'20px',marginBottom:'20px'}} endIcon={<ArrowForwardIosIcon/>}>Send</Button>
                {loadingFetch && (
                <CircularProgress
                    size={24}
                    sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '41%',
                    left:'3%',
                    marginTop: '-6px',
                    marginLeft: '-12px',
                    }}
                />
                )}
            </Box>

        </div>
    )
}
