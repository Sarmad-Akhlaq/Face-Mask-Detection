import React, { useEffect, useState } from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Pages/Login';
import PeopleWearingMask from './components/Pages/PeopleWearingMask';
import PeopleNotWearingMask from './components/Pages/PeopleNotWearingMask';
import { AuthListener } from "./firebase/Auth"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

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
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/peoplewearingmask" component={PeopleWearingMask} />
          <Route path="/peoplenotwearingmask" component={PeopleNotWearingMask} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
