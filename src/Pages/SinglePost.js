import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import { Grid, Typography,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export default function SinglePost() {
    return (
        <div style={{marginTop:'43px'}}>
            <Grid container spacing={2} style={{padding: '15px'}}>
                <Grid  item md={9} xs={12} spacing={3}>
                    <div><img src='./2.jpg' alt="singlepost" style={{width:'100%',height:'500px'}}/></div>
                    <Grid container  style={{marginTop:'10px'}}>
                            <Grid item md={10} xs={10} style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">Lorem Ipsum is simply dummy text</Typography>
                            </Grid>
                            <Grid item md={2} xs={2} style={{textAlign:'right'}}>
                            <IconButton color="primary" component="span" size="large">
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error" component="span" size="large">
                                <DeleteIcon />
                            </IconButton>
                           
                            </Grid>
                            
                    </Grid>
                    <Grid container  style={{marginTop:'10px'}}>
                            <Grid item md={10} xs={10}>
                                <Typography variant="h6" component="div" color="error">Author: Safak</Typography>
                            </Grid>
                            <Grid item md={2} xs={2} style={{textAlign:'right'}}>
                            <Typography variant="h6" component="div" color="error">1 hour ago</Typography>
                            </Grid>
                            
                    </Grid>
                    <Typography variant="subtitle1" component="div" style={{marginTop:'10px',textIndent:'3cm'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    
                    </Typography>
                </Grid>
                <Grid item md={3} xs={12} style={{padding:'10px 20px'}}>
                <Sidebar/>
                </Grid>
            </Grid>
            
        </div>
    )
}
