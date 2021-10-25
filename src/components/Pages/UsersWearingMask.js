import React from 'react';
import NavBar from './Navbar';
import { Box } from '@mui/system';

const UsersWearingMask = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar/>
            <h1>Users wearing mask</h1>
        </Box>
    )
}

export default UsersWearingMask;
