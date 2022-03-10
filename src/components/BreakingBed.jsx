import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React, { useEffect, useState } from "react";
import SearchFilter from './SearchFilter';
import PaginationBB from './PaginationBB';
import CharGallery from './CharGallery';
import FilterDrawer from './FilterDrawer';


const BreakingBed = () => {

    const [charsData, setCharsData] = useState([])
    const [fullCharsData, setFullCharsData] = useState([])
    const [page, setPage] = useState(1)
    const [pageCapcity, setPageCapcity] = useState(0)
    const [searchName, setSearchName] = useState('')
    const [checkedSeasons, setCheckedSeasons] = useState([1, 2, 3, 4, 5]);
    const [checkedStatus, setCheckedStatus] = useState([]);
    const [drawer, setDrawer] = useState(false)

    const fetchFullChar = async () => {
        const rawData = await fetch(`https://breakingbadapi.com/api/characters`)
        const data = await rawData.json()
        setFullCharsData(data)
        setCharsData(data)
    }

    const fetchByName = async (os) => {
        const rawData = await fetch(`https://breakingbadapi.com/api/characters?name=${searchName}&limit=3&offset=${os}`)
        const data = await rawData.json()
        setCharsData(data)
    }
    const getTotalByName = async () => {
        const rawData = await fetch(`https://breakingbadapi.com/api/characters?name=${searchName}`)
        const data = await rawData.json()
        setPageCapcity(Math.floor(data.length / 3) + 1)
    }

    useEffect(() => {
        if (searchName.length > 0) {
            setPage(1)
            fetchByName(0)
            getTotalByName()
        } else {
            setPage(1)
            fetchFullChar()
            setPageCapcity(0)
        }
    }, [searchName])

    useEffect(() => {
        if (fullCharsData.length > 0) {
            let result = [...fullCharsData];

            if (checkedStatus.length !== 0) {
                result = result.filter(i => checkedStatus.includes(i.status))
            }

            if (checkedSeasons.length === 0) {
                result = result.filter(i => i.appearance.length === 0)
            }
            else {
                result = result.filter(i => i.appearance.some(s => checkedSeasons.includes(s)))
            }
            setCharsData(result)
        }
    }, [checkedSeasons, checkedStatus]);



    return (
        <Box>
            <Box
                textAlign={'center'}
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'block'
                    }
                }}
            >
                <Box
                    component="img"
                    height="17%"
                    width="17%"
                    src={require('../assets/Vector.png')}
                />
            </Box>

            <Grid container
                sx={{ px: 2, py: 5 }}
                spacing={5}>
                <Grid item lg>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <SearchFilter drawer={drawer} setDrawer={setDrawer} searchName={searchName} setSearchName={setSearchName} />
                </Grid>
                <Grid item lg>
                </Grid>
            </Grid>

            <Box sx={{ backgroundColor: 'white', borderRadius: 15, py: 2 }}>
                <CharGallery charsData={charsData} />
            </Box>


            <Box sx={{ py: 2 }}>
                <PaginationBB pageCapcity={pageCapcity} page={page} setPage={setPage} fetchByName={fetchByName} setCharsData={setCharsData} fullCharsData={fullCharsData} searchName={searchName} />
            </Box>
            <FilterDrawer drawer={drawer} checkedStatus={checkedStatus} setCheckedStatus={setCheckedStatus} setDrawer={setDrawer} checkedSeasons={checkedSeasons} searchName={searchName} setCheckedSeasons={setCheckedSeasons} />
        </Box >


    )
}
export default BreakingBed
