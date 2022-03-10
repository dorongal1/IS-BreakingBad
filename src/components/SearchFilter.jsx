import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
const SearchFilter = ({ searchName, setSearchName, setDrawer }) => {
    const handleNameChange = (e) => {
        setSearchName(e.target.value)
    }
    const toggleDrawer = (openStatus) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(openStatus);
    };

    return (
        <TextField
            fullWidth
            InputProps={{
                style: {
                    height: 70,
                    paddingLeft: 25, fontSize: 30, fontWeight: '100', color: 'white',
                },
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={toggleDrawer(true)}
                        >
                            <FilterListIcon />
                        </IconButton>
                    </InputAdornment>
                ),
                disableUnderline: true,
            }} variant="standard" placeholder='Character Name' sx={{
                '& svg': {
                    fontSize: 40,
                    color: 'white'
                },
                background: 'linear-gradient(to right bottom,#2AB670,#118B4E,#199458)', boxShadow: 7, borderRadius: 10
            }} value={searchName}
            onChange={handleNameChange} />
    )
}

export default SearchFilter