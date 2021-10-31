import React from 'react';
import NavBar from './Navbar';
import { Box } from '@mui/system';

const Home = () => {
    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <NavBar/>
            <h1 style={{color:"white"}} >ALERT! Person found not wearing mask at 29-10-2021</h1>
        </Box>
    )
}

export default Home
