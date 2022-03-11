import React from 'react'
import Grid from '@mui/material/Grid';
import CharCard from './CharCard'
import CircularLoading from './CircularLoading'

const CharGallery = ({ charsData }) => {



    return (
        <Grid data-testid={`CharGallery_1`} container spacing={5} sx={{ p: { lg: 5, xs: 2 } }}>
            {charsData.length === 0 ? <CircularLoading /> : ``}
            {charsData.map(char =>
                <CharCard key={char.char_id} charData={char}></CharCard>
            )}
        </Grid >
    )
}

export default CharGallery