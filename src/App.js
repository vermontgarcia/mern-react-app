import React, { Component } from 'react';
import Router from './Router';
import {withRouter} from 'react-router-dom';
import {login} from './authService';
import {logout} from './authService';
import {signup} from './authService';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    login(this.state.user, this.props.history)
  }
  
  handleSignup = (e) => {
    e.preventDefault();
    signup(this.state.user, this.props.history)
  }

  handleLogout = () => {
    logout(this.props.history)
  }

  handleChange = (e) => {
    const {user} = this.state;
    let field = e.target.name;
    user[field] = e.target.files ? e.target.files[0] : e.target.value;
    this.setState({user})
  }

  handleRedirect = () => {
    this.props.history.push('/login');
  }

  handleSetState = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    user ? this.setState({user}) : this.props.history.push('/login');
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    user ? this.setState({user}) : this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <Router 
          state={this.state}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          handleSignup={this.handleSignup}
          handleChange={this.handleChange}
          handleSetState={this.handleSetState}
        />
      </div>
    );
  }
}

export default withRouter(App);
