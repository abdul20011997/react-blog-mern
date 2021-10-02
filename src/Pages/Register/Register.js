import { Typography,Box,CircularProgress,TextField,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton, Button } from '@mui/material'
import React,{useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link,useHistory } from 'react-router-dom';
import { green } from '@mui/material/colors';
import Validator from "../../Error/Error";
export default function Register() {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(true);
    const [loadingFetch,setLoadingFetch]=useState(false);

    const [error,setError]=useState('');
    const [errusername,setErrusername]=useState(false);
    const [erremail,setErremail]=useState(false);
    const [errpassword,setErrpassword]=useState(false);


    const history=useHistory();

    const [showpassword,setshowPassword]=useState(false);
    const handleClickShowPassword=()=>{
        setshowPassword(!showpassword);
    }
    const handleMouseDownPassword=(e)=>{
        e.preventDefault();
    }
    const handleUsername=(e)=>{
        // console.log(e.target.value)
        if(e.target.value==''){
            setErrusername(true)
            setLoading(true)
        }
        else{
            setErrusername(false)
            setLoading(false)
            setUsername(e.target.value)
        }
    }

    const handleChangePassword=(e)=>{
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
    const register=()=>{
        const data={
            username:username,
            email:email,
            password:password
        };
        console.log(data);
        setLoading(true);
        setLoadingFetch(true);
        fetch('http://localhost:4000/register',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            console.log(res)
            if(res.status==403){
                throw new Error('User already exists')
            }
            else if(res.status==500){
                throw new Error(res.statusText)
            }
            return res.json()
        }).then(data=>{
            if(data.message.username){
                history.push('/login');
            }
            setLoading(false)
            setLoadingFetch(false)

        }).catch(err=>{
            setError(err.message)
            setLoading(false)
            setLoadingFetch(false)

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
            <Typography variant="h4" component="div">Register</Typography>
            <TextField required placeholder="Enter Username" error={errusername} helperText={errusername && 'Kindly enter username'} onChange={handleUsername} id="outlined-required" color="primary" label="Username" style={{marginTop:'20px',marginBottom:'20px',display:'block'}} fullWidth/>
            <TextField required placeholder="Enter Email" error={erremail} helperText={erremail ? 'Kindly enter valid email':''} onChange={handleEmail} id="outlined-required" color="primary" label="Email" style={{marginTop:'20px',marginBottom:'20px',display:'block'}} fullWidth/>
            <FormControl style={{width:'100%'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
                <OutlinedInput placeholder="Enter Password" error={errpassword}  fullWidth required color="primary" id="outlined-adornment-password" onChange={handleChangePassword} type={showpassword ? 'text' : 'password'}
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
            <Button style={{marginTop:'15px'}} color="success" variant="contained" disabled={loading} onClick={register}>Register</Button>
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
            <Link to='login'><Typography style={{textDecoration:'underline',marginTop:'10px',cursor:'pointer'}}variant="subtitle1" color="parimary">Already have an account? login</Typography></Link>
            { error ? <Validator severity="error" error={error}/> : null}            
            </div>
        </div>
    )
}
