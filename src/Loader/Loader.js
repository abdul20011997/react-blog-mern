import React from 'react'
import { CircularProgress} from '@mui/material';

export default function Loader() {
    return (
        <>
            <CircularProgress color="secondary" size={100} style={{margin:'auto',display:'block'}}/>
        </>
    )
}
