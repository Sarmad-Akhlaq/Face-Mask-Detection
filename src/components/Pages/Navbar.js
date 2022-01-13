import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid} from '@mui/material';
import { SignOut } from '../../firebase/Auth';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
const NavBar = ({history}) => {

  const signOut = () => {
    SignOut().then(()=> {
      console.log(history)
      history.push("/")
    }).catch(err=> {
      alert(err.message)
    })
  }

  return (
    <Box>
      <AppBar position="static" style={{backgroundColor: "darkred"}}>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" width="250px">
            Face Mask Detection
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
         >
              <Grid
              container
              display="flex"
              justifyContent="space-evenly" 
              >
                <Button onClick={() => history.push("/peoplewearingmask")} color="inherit">People wearing mask</Button>
                <Button onClick={() => history.push("/peoplenotwearingmask")} color="inherit">People not wearing mask</Button>
                <Button onClick={signOut} variant="contained" color="primary">Log out</Button>
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(NavBar);