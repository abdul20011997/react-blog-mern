import { Typography,Box,CircularProgress,TextField,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton, Button } from '@mui/material'
import React,{useState,useContext} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link,useHistory} from 'react-router-dom';
import { green } from '@mui/material/colors';
import Validator from "../../Error/Error";
import {AuthContext} from "../../context/AuthContextProvider";


export default function Login() {
    const authContext=useContext(AuthContext)
    const handleAuth=authContext.handleAuth;
    const [email,setEmail]=useState('');
    const [loading,setLoading]=useState('');
    const [error,setError]=useState('');
    const history=useHistory();
    const [password,setPassword]=useState('');
    const [showpassword,setshowPassword]=useState(false);
    const [loadingFetch,setLoadingFetch]=useState(false);
    const [erremail,setErremail]=useState(false);
    const [errpassword,setErrpassword]=useState(false);

    const handleClickShowPassword=()=>{
        setshowPassword(!showpassword);
    }
    const handleMouseDownPassword=(e)=>{
        e.preventDefault();
    }
    const handleChangePassword=(e)=>{
        // console.log(e.target.value)
        // setPassword(e.target.value)
        if(e.target.value==''){
            setErrpassword(true)
            setLoading(true)
        }
        else{
           setErrpassword(false)
           setLoading(false)
           setPassword(e.target.value)
        }
    }
    const handleEmail=(e)=>{
        // setEmail(e.target.value)
        if(e.target.value=='' || !e.target.value.includes('@')){
            setErremail(true)
            setLoading(true)
        }
        else{
            setErremail(false)
            setLoading(false)
            setEmail(e.target.value)
        }
    }

    const login=()=>{
        setLoading(true)
        setLoadingFetch(true);
        const data={
            email:email,
            password:password
        }
        fetch('http://localhost:4000/login',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            setLoading(false);
            if(res.status==401){
                throw new Error('Password does not match')
            }
            else if(res.status==404){
                throw new Error('User not found')
            }
            else if(res.status==500){
                throw new Error(res.statusText)
            }
            return res.json()
        }).then(data=>{
            console.log(data.message)
            setLoading(false);
        setLoadingFetch(false);
            if(data.message.username){
                handleAuth();
                localStorage.setItem("id", data.message._id)
                localStorage.setItem("isauth", true)
                localStorage.setItem("userdetails", JSON.stringify(data.message))
                console.log('under')
                history.push('/')
            }
        }).catch(err=>{
            setLoading(false)
        setLoadingFetch(false);
            setError(err.message)
        })
    }
    
    return (
        <div style={{background:"url(" + "./4.jpg"+ ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100vh',
        backgroundPosition: 'center'
      }}>
            <div style={{width:'30%',margin: 'auto',position:'absolute',top:'30%',left:'34%',borderRadius: '5px',background: '#f7f7f7',padding: '30px',textAlign: 'center'}}>
            <Typography variant="h4" component="div">Login</Typography>
            <TextField required placeholder="Enter Email" error={erremail} helperText={erremail ? 'Kindly enter valid email':''}  onChange={handleEmail} id="outlined-required" color="primary" label="Email" style={{marginTop:'20px',marginBottom:'20px',display:'block'}} fullWidth/>
            <FormControl style={{width:'100%'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                <OutlinedInput placeholder="Enter Password" onChange={handleChangePassword} fullWidth required color="primary" id="outlined-adornment-password"  type={showpassword ? 'text' : 'password'}
                  value={password} endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >{showpassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
                />
                {errpassword ? <p className="css-1wc848c-MuiFormHelperText-root" style={{color:'#d32f2f'}}>Kindly enter password</p> : null }
            </FormControl>
            <Box sx={{ m: 1, position: 'relative' }}>
            <Button style={{marginTop:'15px'}} color="success" variant="contained" disabled={loading} onClick={login}>Login</Button>
                {loadingFetch && (
                <CircularProgress
                    size={24}
                    sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-6px',
                    marginLeft: '-12px',
                    }}
                />
                )}
            </Box>
            <Link to='register'><Typography style={{textDecoration:'underline',marginTop:'10px',cursor:'pointer'}}variant="subtitle1" color="parimary">Craete New Account</Typography></Link>
            { error ? <Validator severity="error" error={error}/> : null}            
            
            </div>
        </div>
    )
}
