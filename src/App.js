import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import {withRouter} from 'react-router-dom';
import {login} from './authService';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: {
        username: '',
        email: '',
        loggedIn: false
      }
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in.....')
    console.log(this.state.user);
    login(this.state.user, this.props.history)
  }

  handleChange = (e) => {
    const {user} = this.state;
    let field = e.target.name;
    user[field] = e.target.files ? e.target.files[0] : e.target.value;
    this.setState({user})
    //console.log(this.state.user);
  }

  handleRedirect = () => {
    this.props.history.push('/login');
  }

  render() {
    //console.log("appjs", this.props);
    return (
      <div className="App">
        {/*
        <nav>
            <button onClick={this.handleRedirect}>{this.state.user.loggedIn ? this.state.user.username: "login"}</button>
        </nav>
        */}
        <Router state={this.state} handleLogin={this.handleLogin} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default withRouter(App);
