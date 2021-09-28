import React from 'react'
import { Typography} from '@mui/material';

export default function Error({error}) {
    return (
        <>
          <Typography variant="h3" component="div" style={{color:'red',margin:'auto'}}>
            {error}
        </Typography>;  
        </>
    )
}
