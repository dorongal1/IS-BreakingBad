import React from 'react'
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const CircularLoading = () => {
    return (
        <Grid item xs={12} sx={{ textAlign: "center" }}
        >
            <CircularProgress color="success" />
        </Grid>
    )
}

export default CircularLoading