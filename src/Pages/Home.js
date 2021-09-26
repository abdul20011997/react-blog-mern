import { Card, Grid ,Avatar,CardHeader,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";


export default function Home() {
    return (
        <div>
            <Header/>
            <Grid container spacing={2} style={{padding: '15px'}}>
                <Grid container item md={8} xs={12} spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Link to='/singlepost/abcd' style={{textDecoration:'none'}}>
                            <Card>
                            <CardHeader
                                    avatar={
                                    <Avatar  aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="./1.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Learn More</Button>
                                </CardActions>

                            </Card>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                            <Card>
                            <CardHeader
                                    avatar={
                                    <Avatar  aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="./2.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                            <Card>
                            <CardHeader
                                    avatar={
                                    <Avatar  aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="./3.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                            <Card>
                            <CardHeader
                                    avatar={
                                    <Avatar  aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="./1.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                    </Grid>
                    
                </Grid>
                <Grid item md={4} xs={12} style={{padding:'10px 20px'}}>
                <Sidebar/>
                </Grid>
                

            </Grid>
            
        </div>
    )
}
