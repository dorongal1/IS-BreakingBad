import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';

const FilterDrawer = ({ drawer, setDrawer, checkedSeasons, setCheckedSeasons, searchName, checkedStatus, setCheckedStatus }) => {

    const toggleDrawer = (openStatus) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(openStatus);
    };

    const handleSeasonCheck = (s) => {
        let updatedList = [...checkedSeasons];
        if (!updatedList.includes(s)) {
            updatedList = [...checkedSeasons, s];
        } else {
            updatedList.splice(checkedSeasons.indexOf(s), 1);
        }
        setCheckedSeasons(updatedList);
    };

    const handleStatusCheck = (s) => {
        let updatedList = [...checkedStatus];
        if (!updatedList.includes(s)) {
            updatedList = [...checkedStatus, s];
        } else {
            updatedList.splice(checkedStatus.indexOf(s), 1);
        }
        setCheckedStatus(updatedList);
    };



    return (
        <React.Fragment key={'filterDrawer'}>
            <Drawer
                anchor='left'
                open={drawer}
                onClose={toggleDrawer(false)}
            >
                <List sx={{ width: 250, maxWidth: 360, bgcolor: 'background.paper' }}>
                    {[1, 2, 3, 4, 5].map((s) => {
                        const labelId = `checkbox-list-label-${s}`;
                        return (
                            <ListItem
                                key={s}
                                disablePadding
                            >
                                <ListItemButton disabled={searchName.length > 0} value={s} onClick={() => handleSeasonCheck(s)} dense>
                                    <ListItemIcon value={s}>
                                        <Checkbox
                                            value={s}
                                            disabled={searchName.length > 0}
                                            edge="start"
                                            checked={checkedSeasons.includes(s)}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`Season ${s}`} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                    <Divider />
                    {['Alive', 'Deceased'].map((s) => {
                        const labelId = `checkbox-list-label-${s}`;
                        return (
                            <ListItem
                                key={s}
                                disablePadding
                            >
                                <ListItemButton disabled={searchName.length > 0} value={s} onClick={() => handleStatusCheck(s)} dense>
                                    <ListItemIcon value={s}>
                                        <Checkbox
                                            value={s}
                                            disabled={searchName.length > 0}
                                            edge="start"
                                            checked={checkedStatus.includes(s)}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={s} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>





            </Drawer>
        </React.Fragment >
    )
}

export default FilterDrawer