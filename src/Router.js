import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import NotFound from './404';



const Router = ({state, handleLogin, handleLogout, handleChange, handleSignup}) => (
  <Switch>
    <Route exact path='/' render={(props) => (
      <Home
        handleLogout={handleLogout}
        state={state}
        {...props}
      />)}
    />
    <Route exact path='/login' render={(props) => (
      <Login
        handleLogin={handleLogin}
        handleChange={handleChange}
        {...props}
      />)}
    />
    <Route exact path='/signup' render={(props) => (
      <Signup
        handleSignup={handleSignup}
        handleChange={handleChange}
        {...props}
      />)}
    />
    <Route exact path='/profile' render={(props) => (
      <Profile
        handleLogout={handleLogout}
        state={state}
        {...props}
      />)}
    />
    
    <Route path='*' component={NotFound} />
  </Switch>
)

export default Router;