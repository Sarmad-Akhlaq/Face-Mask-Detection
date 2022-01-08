import { Paper } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import NavBar from './Navbar';
import StickyHeadTable from './table/table';

const PeopleNotWearingMask = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar />
            <h1 style={{color:"white"}}>People not wearing mask</h1>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Paper xs={6} sm={{p:25 , bgcolor: "#949494"}}>
                    <StickyHeadTable sort={"mask_off"} />
                </Paper>
            </Box>
        </Box>
    )
}

export default PeopleNotWearingMask;
