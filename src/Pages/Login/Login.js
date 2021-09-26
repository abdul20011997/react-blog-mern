import { Typography,TextField,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton, Button } from '@mui/material'
import React,{useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export default function Login() {
    const [password,setPassword]=useState('');
    const [showpassword,setshowPassword]=useState(false);
    const handleClickShowPassword=()=>{
        setshowPassword(!showpassword);
    }
    const handleMouseDownPassword=(e)=>{
        e.preventDefault();
    }
    const handleChangePassword=(e)=>{
        // console.log(e.target.value)
        setPassword(e.target.value)
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
            <TextField required placeholder="Enter Email" id="outlined-required" color="primary" label="Email" style={{marginTop:'20px',marginBottom:'20px',display:'block'}} fullWidth/>
            <FormControl style={{width:'100%'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                <OutlinedInput placeholder="Enter Password" fullWidth required color="primary" id="outlined-adornment-password" onChange={handleChangePassword} type={showpassword ? 'text' : 'password'}
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
            </FormControl>
            <Button style={{marginTop:'15px'}} color="success" variant="contained">Login</Button>
            <Link to='register'><Typography style={{textDecoration:'underline',marginTop:'10px',cursor:'pointer'}}variant="subtitle1" color="parimary">Craete New Account</Typography></Link>
            </div>
        </div>
    )
}
