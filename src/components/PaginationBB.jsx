import React from 'react'
import { Box } from '@mui/system';
import Pagination from '@mui/material/Pagination';

const PaginationBB = ({ pageCapcity, page, setPage, fetchByName, setCharsData, fullCharsData, searchName }) => {

    const handlePageChange = (e, value) => {
        setPage(value)
        if (searchName.length > 0) {
            fetchByName(((value - 1) * 3))
        }
        else {
            let start = ((value - 1) * 6)
            let end = ((value - 1) * 6) + 6
            setCharsData(fullCharsData.slice(start, end))
        }
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Pagination count={pageCapcity} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" />
        </Box>
    )
}

export default PaginationBB