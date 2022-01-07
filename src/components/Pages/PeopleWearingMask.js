import React from 'react';
import NavBar from './Navbar';
import { Box } from '@mui/system';
import StickyHeadTable from './table/table';
import { Paper } from '@material-ui/core';

const PeopleWearingMask = () => {
    return (
        <Box sx={{ bgcolor: "#212121", height: "100vh" }}>
            <NavBar />
            <h1 style={{ color: "white" }}>People wearing mask</h1>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Paper xs={6} sm={{p:25 , bgcolor: "#949494"}}>
                    <StickyHeadTable />
                </Paper>
            </Box>
        </Box>
    )
}

export default PeopleWearingMask;
