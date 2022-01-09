import React, { useEffect, useState } from 'react'
import { 
Button, 
Card, 
CardContent, 
Grid, 
TextField, 
AppBar, 
Toolbar, 
Typography } 
from '@material-ui/core';
import Box from '@mui/material/Box';
import { UserSignIn } from "../../firebase/Auth"


const Login = ({history}) => {
    const [form, setForm] = useState({ email: "", password: "" })

    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = () => {
        if(form.email && form.password){
            UserSignIn(form.email, form.password)
                .then(user => {
                    history.push("/peoplewearingmask")
                })
                .catch(error => {
                    alert(error.message)
                })        
        }
        else {
            alert("please enter email and password")
        }
    }

    useEffect(() => {
    }, [])

    return (
        <Box sx={{bgcolor: "#212121", height: "100vh"}}>
            <Box>
                <AppBar position="static" style={{backgroundColor: "darkred"}}>
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div" width="250px">
                        Face Mask Detection
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
                <Grid
                container
                direction="row"
                justifyContent="center"
                >
                <Card style={{width: "350px", marginTop: "18vh"}} >
                    <CardContent>
                        <form>
                            <Grid
                            container
                            spacing={3}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                <h1>Welcome</h1>
                                <Grid item md={10}>
                                    <TextField value={form.email} name="email" onChange={handleForm} id="outlined-basic" label="Email" variant="outlined" size="medium" fullWidth />
                                </Grid>

                                <Grid item md={10}>
                                    <TextField value={form.password} name="password" type="password" onChange={handleForm} id="outlined-basic" label="Password" variant="outlined" fullWidth />
                                </Grid>

                                <Grid item md={10}>
                                    <Button style={{backgroundColor: "darkred", color: "white"}} variant="contained" size="large" fullWidth onClick={handleSubmit} >Login</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid> 
        </Box>
    )
}

export default Login
