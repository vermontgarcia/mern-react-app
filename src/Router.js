import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import List from './Components/List/List';
import Searches from './Components/Searches/Searches';
import NotFound from './404';

const Router = ({state, handleLogin, handleLogout, handleChange, handleSignup, handleSetState}) => (
  <Switch>
    <Route exact path='/' render={(props) => (
      <Home
        handleSetState={handleSetState}
        handleLogout={handleLogout}
        state={state}
        {...props}
      />)}
    />
    <Route exact path='/search' render={(props) => (
      <Search
        handleSetState={handleSetState}
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
        handleSetState={handleSetState}
        handleLogout={handleLogout}
        state={state}
        {...props}
      />)}
    />
    <Route exact path='/mylist' render={(props) => (
      <List
        handleSetState={handleSetState}
        handleLogout={handleLogout}
        state={state}
        {...props}
      />)}
    />
    <Route exact path='/mysearches' render={(props) => (
      <Searches
        handleSetState={handleSetState}
        handleLogout={handleLogout}
        state={state}
        {...props}
      />)}
    />
    <Route path='*' component={NotFound} />
  </Switch>
)

export default Router;