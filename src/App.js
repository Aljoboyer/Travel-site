import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Adduser from './components/Adduser/Adduser';
import Users from './components/User/Users'
import Header from './components/Header/Header'
import Updateuser from './components/Updateuser/Updateuser';
const App = () => {
  return (
    <div className="container-fluid">
        <Router>
        <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/adduser">
                    <Adduser></Adduser>
                </Route>
                <Route exact path="/user">
                    <Users></Users>
                </Route>
                <Route exact path="/users/update/:id">
                    <Updateuser></Updateuser>
                </Route>
            </Switch>
        </Router>
    </div>
  );
};

export default App;