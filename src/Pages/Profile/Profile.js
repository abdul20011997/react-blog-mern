import React from 'react'
import Sidebar from "../../Sidebar/Sidebar";
import { Grid,Typography,Avatar,Badge,Input,TextField,Button} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
export default function Profile() {
    return (
        <div style={{marginTop:'43px'}}>
            <Grid container spacing={2} style={{padding: '15px'}}>
                <Grid  item md={9} xs={12} spacing={3}>
                    <Typography variant="h4" gutterBottom="true" component="div" color="secondary">Update Your Account</Typography>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={<label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" style={{display:'none'}}/>
                                <CameraAltIcon style={{background:'rgb(185 151 151)',borderRadius: '50%',padding: '4px',color: 'white',height:'20px',width:'20px'}}/>
                                </label>}
                    >
                        <Avatar alt="Travis Howard" src="./2.jpg" 
                        sx={{ width: 150, height: 150 }}
                        />
                    </Badge>
                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth  color="success" style={{display:'block',marginTop:'25px',marginBottom:'25px'}}/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth  color="success" style={{display:'block',marginTop:'25px',marginBottom:'25px'}}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth  color="success" style={{display:'block',marginTop:'25px',marginBottom:'25px'}}/>
                    <Button style={{margin:'auto',textAlign:'center',display:'block'}} variant="contained" color="warning">Update</Button>
                </Grid>
                <Grid item md={3} xs={12} style={{padding:'10px 20px'}}>
                <Sidebar/>
                </Grid>
            </Grid>
            
        </div>
    )
}
