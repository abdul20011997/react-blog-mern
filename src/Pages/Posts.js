import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Grid ,Avatar,CardHeader,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material';
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

export default function Posts({posts,error,loading}) {
    let postdata='';
    if(loading){
        postdata=<Loader/>;
    }
    else if(error){
        postdata= <Error error={error}/>

    }
    else if(posts.length > 0){
        postdata=posts.map((post)=>{
            return (
                <Grid item md={6} xs={12}>
                <Link to={'/singlepost/'+post._id}style={{textDecoration:'none'}}>
                    <Card>
                    <CardHeader
                            avatar={
                            <Avatar  aria-label="recipe">
                                {post.title.charAt(0).toUpperCase()}
                            </Avatar>
                            }
                            title={post.title}
                            subheader={new Date(post.createdAt).toDateString()}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="./1.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            {post.desc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Learn More</Button>
                        </CardActions>

                    </Card>
                </Link>
            </Grid>
            )
        })
    }
    return (
       <>
            {postdata}
       </>
    )
}
