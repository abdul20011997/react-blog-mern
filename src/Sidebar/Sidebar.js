import React, { Fragment ,useState,useEffect} from 'react'
import { Typography,List, ListItem,  ListItemButton,IconButton} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Loader from "../Loader/Loader";
import Error from "../Error/Error"
export default function Sidebar() {
    const [category,setCategory]=useState('');
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/category/fetchallcategories').then(res=>{
            return res.json()
        }).then(data=>{
            console.log(data)
            setCategory(data.message)
            setLoading(false)
        }).catch(err=>{
            setLoading(false)
            setError(err.message)
        })
    }, [])
    let postdata='';
    if(loading){
        postdata=<Loader/>;
    }
    else if(error){
        postdata= <Error error={error}/>

    }
    else if(category.length > 0){
        postdata=<>
        {
            category.map((cat)=>{
                return (
                    <ListItem key={cat._id}>
                    <ListItemButton>{cat.name}</ListItemButton>
                    </ListItem>
                )
            })
        }
                </>
    }
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center',borderTop: '2px dashed #211a1a',borderBottom: '2px dashed #000000',marginTop: '10px'}}>
                    ABOUT ME
                </Typography>
                <img src="/1.jpg" alt="myimage" style={{height:'300px'}}/>
                <Typography variant="subheading" gutterBottom component="div">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </Typography>
                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center',borderTop: '2px dashed #211a1a',borderBottom: '2px dashed #000000',marginTop: '10px'}}>
                    CATEGORIES
                </Typography>
                <List>
                  {postdata}
                </List>
                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center',borderTop: '2px dashed #211a1a',borderBottom: '2px dashed #000000',marginTop: '10px'}}>
                    FOLLOW US
                </Typography>
                <div style={{textAlign:'center'}}>
                <IconButton><FacebookIcon size="large"/></IconButton>
                 <IconButton><TwitterIcon size="large"/></IconButton>
                 <IconButton><InstagramIcon size="large"/></IconButton> 
                 <IconButton><WhatsAppIcon size="large"/></IconButton>
                 </div>
        </Fragment>
    )
}
