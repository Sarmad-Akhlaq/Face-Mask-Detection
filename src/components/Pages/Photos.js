import { Box } from '@mui/system';
import React from 'react';
import NavBar from './Navbar';

const Photos = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar/>
            <h1>Photos</h1>
        </Box>
    )
}

export default Photos
