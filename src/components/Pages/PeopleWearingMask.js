import React from 'react';
import NavBar from './Navbar';
import { Box } from '@mui/system';
import StickyHeadTable from './table/table';
import { Paper } from '@material-ui/core';

const PeopleWearingMask = () => {
    return (
        <>
            <NavBar />
        <Box sx={{ bgcolor: "#212121", height: "100vh" }}>
            <h1 style={{ color: "white", display:"flex", justifyContent:"center" }}>People wearing mask</h1>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                <Paper xs={8} sm={{p:25 , bgcolor: "#949494"}}>
                    <StickyHeadTable  sort={"mask_on"} />
                </Paper>
            </Box>
        </Box>
        </>
    )
}

export default PeopleWearingMask;
