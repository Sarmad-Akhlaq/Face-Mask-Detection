import React from 'react';
import NavBar from './Navbar';
import { Box } from '@mui/system';
import WebCam from '../webCam/WebCam'

const Home = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar/>
            <WebCam/>
        </Box>
    )
}

export default Home
