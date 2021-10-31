import { Box } from '@mui/system';
import React from 'react';
import NavBar from './Navbar';

const PeopleNotWearingMask = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar />
            <h1 style={{color:"white"}}>People not wearing mask</h1>
        </Box>
    )
}

export default PeopleNotWearingMask;
