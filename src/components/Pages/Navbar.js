import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid} from '@mui/material';
import { SignOut } from '../../firebase/Auth';
const NavBar = () => {

  const signOut = () => {
    SignOut().then(()=> {

    }).catch(err=> {

    })
  }

  return (
    <Box>
      <AppBar position="static" style={{backgroundColor: "darkred"}}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" width="250px">
            Face Mask Detection
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
          >
              <Grid>
                <Button href="/home" color="inherit">Home</Button>
                <Button href="/userswearingmask" color="inherit">People wearing mask</Button>
                <Button href="/usersnotwearingmask" color="inherit">People not wearing mask</Button>
                <Button onClick={signOut} sx={{ml:"55px"}} variant="contained" color="error">Log out</Button>
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;