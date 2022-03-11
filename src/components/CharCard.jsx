
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CakeIcon from '@mui/icons-material/Cake';
import InfoIcon from '@mui/icons-material/Info';
import TvIcon from '@mui/icons-material/Tv';
const CharCard = ({ charData }) => {


    return (
        <Grid data-testid={`CharCard-${charData.char_id}`} item sm={12} md={6} lg={4}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 15,
                    boxShadow: 5,
                    minHeight: { md: 260, xl: 300 }
                }}
            >
                <Box
                    component="img"
                    sx={{
                        maxHeight: { xs: '30%', },
                        maxWidth: { xs: '30%', },
                        objectFit: 'contain',
                        borderRadius: 15, boxShadow: 2,
                        m: 2
                    }}
                    alt={charData.name}
                    src={charData.img}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        m: 3,
                    }}
                >
                    <Box component="div" sx={{ fontSize: 16, color: 'gray', fontWeight: 'light' }}>
                        {charData.nickname}
                    </Box>
                    <Box component="div" sx={{ color: 'black', fontSize: 22, fontWeight: 'light' }}>

                        {charData.name}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, flexWrap: 'wrap', }}>
                        <Box
                            sx={{
                                mt: 1.5,
                                mr: 1.5,
                                p: 0.5,
                                backgroundColor: 'rgb(31,157,90)',
                                borderRadius: '5px',
                                color: 'white',
                                fontWeight: 'medium',
                                display: 'flex',
                                fontSize: { xs: 10, md: 12 },
                                alignItems: 'center',
                                '& svg': {
                                    fontSize: { xs: 15, md: 21 },
                                    mr: 0.5,
                                },
                            }}
                        >
                            <CakeIcon />
                            {charData.birthday}
                        </Box>
                        <Box
                            sx={{
                                mt: 1.5,
                                mr: 1.5,
                                p: 0.5,
                                backgroundColor: 'rgb(25,140,80)',
                                borderRadius: '5px',
                                color: 'white',
                                fontWeight: 'medium',
                                display: 'flex',
                                fontSize: { xs: 10, md: 12 },
                                alignItems: 'center',
                                '& svg': {
                                    fontSize: { xs: 15, md: 21 },
                                    mr: 0.5,
                                },
                            }}
                        >
                            <InfoIcon />
                            {charData.portrayed}
                        </Box>
                        <Box
                            sx={{
                                mt: 1.5,
                                p: 0.5,
                                backgroundColor: 'rgb(20,120,68)',
                                borderRadius: '5px',
                                color: 'white',
                                fontWeight: 'medium',
                                display: 'flex',
                                fontSize: { xs: 10, md: 12 },
                                alignItems: 'center',
                                '& svg': {
                                    fontSize: { xs: 15, md: 21 },
                                    mr: 0.5,
                                },
                            }}
                        >
                            <TvIcon />
                            {charData.appearance.join(',')}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid >
    )
}

export default CharCard