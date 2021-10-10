import React,{useState,useEffect} from 'react'
import Sidebar from "../Sidebar/Sidebar";
import { Grid, Typography,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Loader from "../Loader/Loader";
import Error from "../Error/Error"
import { useParams } from 'react-router';
export default function SinglePost() {
    const [Post,setPost]=useState('');
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const {id}=useParams();
    const url='http://localhost:4000/images/';

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:4000/post/getsinglepost/'+ id).then(res=>{
            return res.json();
            }).then(data=>{
                console.log(data.message)
                setPost(data.message);
                setLoading(false);
            }).catch(err=>{
                setError(err.message);
                setLoading(false);

            })    
        }, [id])
        let postdata='';
        if(loading){
            postdata=<Loader/>;
        }
        else if(error){
            postdata= <Error error={error}/>

        }
        else if(Post){
    const url='http://localhost:4000/images/';
            postdata= <><div><img src={Post.photo ? url+Post.photo :'/2.jpg'} alt="singlepost" style={{width:'100%',height:'500px'}}/></div>
            <Grid container  style={{marginTop:'10px'}}>
                    <Grid item md={10} xs={10} style={{textAlign:'center'}}>
                        <Typography variant="h4" component="div">{Post.title}</Typography>
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
                        <Typography variant="h6" component="div" color="error">Author: {Post.username.username}</Typography>
                    </Grid>
                    <Grid item md={2} xs={2} style={{textAlign:'right'}}>
                    <Typography variant="h6" component="div" color="error">{new Date(Post.createdAt).toDateString()}</Typography>
                    </Grid>
                    
            </Grid>
            <Typography variant="subtitle1" component="div" style={{marginTop:'10px',textIndent:'3cm'}}>
                {Post.desc}
            
            </Typography>
            </>
        }
    return (
        <div style={{marginTop:'43px'}}>
            <Grid container spacing={2} style={{padding: '15px'}}>
                <Grid  item md={9} xs={12} spacing={3}>
                {postdata} 
                </Grid>
                <Grid item md={3} xs={12} style={{padding:'10px 20px'}}>
                <Sidebar/>
                </Grid>
            </Grid>
            
        </div>
    )
}
