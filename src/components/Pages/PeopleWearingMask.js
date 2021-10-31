import React from 'react';
import NavBar from './Navbar';
import { Box } from '@mui/system';

const PeopleWearingMask = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar/>
            <h1 style={{color:"white"}}>People wearing mask</h1>
        </Box>
    )
}

export default PeopleWearingMask;
