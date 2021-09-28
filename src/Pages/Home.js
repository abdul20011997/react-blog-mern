import { Grid } from '@mui/material';
import React,{useEffect,useState} from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Posts from "./Posts.js";

export default function Home() {
    const [posts,setPosts]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);


    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/post/getallpost').then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data)
            setPosts(data.message);
            setLoading(false);
        }).catch(err=>{
            setError(err.message);
            setLoading(false);
        })
    }, [])
    return (
        <div>
            <Header/>
            <Grid container spacing={2} style={{padding: '15px'}}>
                <Grid container item md={8} xs={12} spacing={3}>
                    <Posts posts={posts} error={error} loading={loading}/>
                </Grid>
                <Grid item md={4} xs={12} style={{padding:'10px 20px'}}>
                <Sidebar/>
                </Grid>
                

            </Grid>
            
        </div>
    )
}
