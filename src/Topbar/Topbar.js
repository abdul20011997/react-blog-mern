import React,{useState} from 'react'
import { AppBar,  Box,Avatar, IconButton, ListItemIcon,  Toolbar, Typography ,Button,Menu,MenuItem} from "@mui/material";
import { makeStyles } from '@mui/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { deepOrange } from '@mui/material/colors';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
const useStyle=makeStyles({
    mainlist:{
        display:'flex',
        padding:0,
        flexDirection:'row',
        flexGrow:1,
        alignItems:'center',
        justifyContent:'Center'
    },
    marginlist:{
        marginLeft:10,
        marginRight:10
    },
    headers:{
        marginLeft:40,
        padding:10,
        '&:hover':{
            color:'#ffffff',
            backgroundColor: 'rgba(156, 39, 176, 0.04)',
        }
    }

})
export default function Topbar() {
    const [anchorEl,setanchorEl]=useState(null);
    const open=Boolean(anchorEl)
    const handleOpen=(e)=>{
        console.log(e.currentTarget)
        setanchorEl(e.currentTarget)
    }
    const handleClose=(e)=>{
        console.log(e.target)
        setanchorEl(null)
    }
    const classes=useStyle();
    return (
        <>
        <AppBar color="inherit" elevation={1} position="fixed">
          <Toolbar>
                 <IconButton><FacebookIcon size="large"/></IconButton>
                 <IconButton><TwitterIcon size="large"/></IconButton>
                 <IconButton><InstagramIcon size="large"/></IconButton> 
                 <IconButton><WhatsAppIcon size="large"/></IconButton> 
                 <Box className={classes.mainlist}>                
                      <Typography  variant="subheader" className={classes.headers} noWrap component="div" style={{margin:'0px 10px',cursor:'pointer',fontWeight:'bold',color:'#444'}}>HOME</Typography>
                      <Typography  variant="subheader" className={classes.headers} noWrap component="div" style={{margin:'0px 10px',cursor:'pointer',fontWeight:'bold',color:'#444'}}>BLOG</Typography>
                      <Typography  variant="subheader" className={classes.headers} noWrap component="div" style={{margin:'0px 10px',cursor:'pointer',fontWeight:'bold',color:'#444'}}>WRITE</Typography>
                      <Typography  variant="subheader" className={classes.headers} noWrap component="div" style={{margin:'0px 10px',cursor:'pointer',fontWeight:'bold',color:'#444'}}>LOGOUT</Typography>
                </Box>
                  <Button style={{marginLeft:'10px',fontWeight:'bold'}} color="secondary" size="large" onClick={handleOpen}>Abdul</Button>
                  <Menu anchorEl={anchorEl} open={open}  onClose={handleClose}>
                      <MenuItem>
                      <ListItemIcon><SettingsRoundedIcon size="small"/></ListItemIcon>
                      Profile
                      </MenuItem>
                      <MenuItem>
                      <ListItemIcon><LogoutRoundedIcon size="small"/></ListItemIcon>
                      Logout
                      </MenuItem>
                  </Menu>
                  <Avatar style={{background:deepOrange[500]}} onClick={handleOpen}>A</Avatar>
          </Toolbar>
        </AppBar><div>
            Top Bars
        </div>
        </>
    )
}