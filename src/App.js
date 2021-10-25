import React, { useEffect, useState } from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Photos from './components/Pages/Photos';
import UsersNotWearingMask from './components/Pages/UsersNotWearingMask';
import UsersWearingMask from './components/Pages/UsersWearingMask';
import { AuthListener } from "./firebase/Auth"

function App() {
  const [user, setUser] = useState("")
  useEffect( () => {
    AuthListener(userData => {
      if(userData){
        setUser(userData)
      }else{
        setUser("")
      }
    })
  }, [])
  return (
    <BrowserRouter>
    {/* {user.hasOwnProperty("uid") &&<NavBar />} */}
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/photos" component={Photos} />
        <Route path="/usersnotwearingmask" component={UsersNotWearingMask} />
        <Route path="/userswearingmask" component={UsersWearingMask} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
