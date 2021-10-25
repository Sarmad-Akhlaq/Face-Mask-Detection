import { Box } from '@mui/system';
import React from 'react';
import NavBar from './Navbar';

const UsersNotWearingMask = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar />
            <h1>Users not wearing mask</h1>
        </Box>
    )
}

export default UsersNotWearingMask;
