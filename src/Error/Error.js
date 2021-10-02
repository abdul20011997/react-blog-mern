import React, { useState } from 'react'
import { Snackbar,Alert} from '@mui/material';

export default function Error({error,severity}) {
    return (
        <>
            <Alert severity={severity}>{error}</Alert>
        </>
    )
}
