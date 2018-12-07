import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import NotFound from './404';



const Router = ({state, handleLogin}) => (
  <Switch>
    <Route exact path='/' render={(props) => <Home handleLogin={handleLogin} state={state} {...props} />} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
    <Route exact path='/profile' component={Profile} />
    <Route path='*' component={NotFound} />
  </Switch>
)

export default Router;